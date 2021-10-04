$(document).ready(async () => {
  // set the dimensions and margins of the graph
  const start = document.querySelector('#searchDate1')
  const end = document.querySelector('#searchDate2')
  const btnSearch = document.querySelector('#buttonSearchDoanhThu')

  // start.addEventListener('change', (e) => {
  //   if(end.value) {
  //     if(e.target.value > end.value)
  //       return alert('Vui lòng chọn lại ngày')
  //     showStatistical(e.target.value, end.value)
  //   }
  // })

  // end.addEventListener('change', (e) => {
  //   if(start.value) {
  //     console.log(e.target.value < start.value)
  //     if(e.target.value < start.value)
  //       return alert('Vui lòng chọn lại ngày')
  //     showStatistical(start.value, e.target.value)
  //   }

  // })

  btnSearch.addEventListener('click', () => {
    if(end.value && start.value){
      if(end.value < start.value)
        return alert('Vui lòng chọn lại ngày')
        showStatistical(start.value, end.value)
    }
  })

  showStatistical()
  function showStatistical(start, end) {
    var margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
  console.log('sssss')
  document.querySelector('#test').innerHTML = ''

  // append the svg object to the body of the page
  var svg = d3
    .select("#test")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Parse the Data
  d3.csv(
    "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv",
    async function (data) {
      console.log(data)
      const today = new Date()
      let url =  `http://localhost:5000/hoadon?start=${today.getFullYear()}-01-01&end=${today.getFullYear()}-10-01`
      if(start && end) {
        url = `http://localhost:5000/hoadon?start=${start}&end=${end}`
      }
      const _data = await fetch(url)
      data = await _data.json()
      console.log(data)
      // sort data
      data.sort(function (b, a) {
        return a.Value - b.Value;
      });

      // X axis
      var x = d3
        .scaleBand()
        .range([0, width])
        .domain(
          data.map(function (d) {
            return d.DiemDi + '-' + d.DiemDen
          })
        )
        .padding(0.2);
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

      // Add Y axis
      var y = d3.scaleLinear().domain([0, data[0].Total]).range([height, 0]);
      svg.append("g").call(d3.axisLeft(y));

      // Bars
      svg
        .selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function (d) {
          return x(d.DiemDi + '-' + d.DiemDen);
        })
        .attr("y", function (d) {
          return y(d.Total);
        })
        .attr("width", x.bandwidth())
        .attr("height", function (d) {
          return height - y(d.Total);
        })
        .attr("fill", "#69b3a2");
        // document.querySelector('#table-doanhthu').innerHTML = ''
        $('.trash').remove();
        for(var i=0;i < data.length;i++){
         var element =
            '<td>'+data[i].MaTX+'</td>'+'<td>'+data[i].DiemDi+'</td>'+'<td>'+data[i].DiemDen+'</td>'+'<td>'+data[i].Total+'</td>'+'</tr>';
          if(i%2==1){
            $("#table-doanhthu").append(
              '<tr height="50px" class="trash" style="background-color: #E4E4E4;">'+element);

          }else{
            $("#table-doanhthu").append(
              '<tr height="50px" class="trash">'+element);
          }


        }
    }
  );
  }
});
