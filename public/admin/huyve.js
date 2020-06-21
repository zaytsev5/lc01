
	/* getAllTicketsCancled()
	async function getAllTicketsCancled(){
		console.log("haha")
		$('.trash').remove();
		$("#table-hoadon").attr('height',20);
		const res = await fetch('http://localhost:5000/allTickets');
		const data = await res.json();
		var index =0;
		if(data.length <= 0) return ;
		for(var i=0;i < data.length;i++){
			if(true){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].MaVeXe+'</td>'+'<td>'+data[i].Email+'</td>'+'<td>'+data[i].STK+'</td>'+'<td>'+data[i].DonGia+'</td>'+'<td>'+data[i].NgayHuy+'</td>'+'<td>'+data[i].TinhTrang+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-vexehuy").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-vexehuy").attr('height'))+20;
					$("#table-vexehuy").attr('height',String(newHeight));
				}else{
					$("#table-vexehuy").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-vexehuy").attr('height'))+20;
					$("#table-vexehuy").attr('height',String(newHeight));
				}
				index++;
			}
		}

	}
	async function handleDestroyTicket(){
		 const numbericRegex = new RegExp("^[0-9]{9,}");
		 let price = 0;
    if(numbericRegex.exec(document.querySelector('#STK').value) == null) return alert("Vui lòng điền đúng số tài khoản")
   console.log(document.querySelector('#MaVeXe-HuyVe').value)
try{
   const tic = await fetch(`http://localhost:5000/booking/ticket/${$('#MaVeXe-HuyVe').val()}`)
  const ticJson = await tic.json();
  console.log(ticJson)
  if(ticJson.length <= 0) return alert("Vé không tồn tại")

   const res = await fetch(`http://localhost:5000/getPostDetails/${ticJson[0].MaCX}`)
  const result = await res.json();

  	price = result[0].DonGia;
    fetch(`http://localhost:5000/destroy/${document.querySelector('#MaVeXe-HuyVe').value}`,{
       method: 'POST',
        headers:{
            'Content-Type' :'application/json'
        },
        body: JSON.stringify({
          'MaVeXe':$('#MaVeXe-HuyVe').val(),
          'STK':$('#STK').val(),
          'DonGia': price,
          "NgayHuy":formatDate()
          
        })
    })
    .then(res => res.json())
    .then(res =>{
    	if(res.err == 0) return alert("Huy ve thanh cong")
    	if(res.err == 1) return alert("Không tồn tại vé")
    	if(res.err == 2) return alert("Đã xảy ra lỗi. Thử lại")
    		window.location.href = window.location.href;
    	
    })
	}catch(err){

	}
 }
	function formatDate(){
		let date = new Date();
		  let dateString = "";
		  dateString += `${date.getFullYear()}-`;

		  if(date.getMonth() +1 < 10) dateString += `0${date.getMonth() +1}-`
		  else dateString += `${date.getMonth() +1}-`

		  if(date.getDate() < 10) dateString += `0${date.getDate()}`
		  else dateString += `${date.getDate()}`

		  return dateString
	}*/

	
	getAllTicketsCancled()
	async function getAllTicketsCancled(){
		console.log("haha")
		$('.trash').remove();
		$("#table-vexehuy").attr('height',20);
		const res = await fetch('http://localhost:5000/allTickets');
		const data = await res.json();
		var index =0;
		if(data.length <= 0) return ;
		for(var i=0;i < data.length;i++){
			if(true){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].MaVeXe+'</td>'+'<td>'+data[i].Email+'</td>'+'<td>'+data[i].STK+'</td>'+'<td>'+data[i].DonGia+'</td>'+'<td>'+data[i].NgayHuy+'</td>'+'<td>'+data[i].TinhTrang+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-vexehuy").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-vexehuy").attr('height'))+20;
					$("#table-vexehuy").attr('height',String(newHeight));
				}else{
					$("#table-vexehuy").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-vexehuy").attr('height'))+20;
					$("#table-vexehuy").attr('height',String(newHeight));
				}
				index++;
			}
		}

	}
async function handleDestroyTicket(){
	document.querySelector('#buttonDeleteVeHuy').textContent = "Đang kiểm tra.."
	const numbericRegex = new RegExp("^[0-9]{9,}");
	let price = 0;
    if(numbericRegex.exec(document.querySelector('#STK').value) == null) {
		document.querySelector('#buttonDeleteVeHuy').textContent = "Hủy vé"
    	return alert("Vui lòng điền đúng số tài khoản")
    }
	   console.log(document.querySelector('#MaVeXe-HuyVe').value)
	   
	try{
		const tic = await fetch(`http://localhost:5000/booking/ticket/${$('#MaVeXe-HuyVe').val()}`)
		const ticJson = await tic.json();
		console.log(tic)
		if(ticJson.length <= 0) {
				document.querySelector('#buttonDeleteVeHuy').textContent = "Hủy vé"
			return alert("Vé không tồn tại")
		}

		const res = await fetch(`http://localhost:5000/getPostDetails/${ticJson[0].MaCX}`)
		const result = await res.json();

			price = result[0].DonGia;
			fetch(`http://localhost:5000/destroy/${document.querySelector('#MaVeXe-HuyVe').value}`,{
			method: 'POST',
				headers:{
					'Content-Type' :'application/json'
				},
				body: JSON.stringify({
				'MaVeXe':$('#MaVeXe-HuyVe').val(),
				'STK':$('#STK').val(),
				'DonGia': price,
				"NgayHuy":formatDate()
				
				})
			})
			.then(res => res.json())
			.then(res =>{
				if(res.err == 0)  alert("Hủy vé thành công!")
				if(res.err == 1) {
				document.querySelector('#buttonDeleteVeHuy').textContent = "Huỷ vé"
					return alert("Không tồn tại vé")
				}
				if(res.err == 2) {
				document.querySelector('#buttonDeleteVeHuy').textContent = "Hủy vé"
					return alert("Đã xảy ra lỗi. Thử lại")
				}
				if(res.err == 4) {
					document.querySelector('#buttonDeleteVeHuy').textContent = "Hủy vé"
						return alert("Vé đã vượt qua hạn cho phép huỷ !")
				}
				

					window.location.href = window.location.href;
				
			})
		}catch(err){

		}
 }
function formatDate(){
		let date = new Date();
		  let dateString = "";
		  dateString += `${date.getFullYear()}-`;

		  if(date.getMonth() +1 < 10) dateString += `0${date.getMonth() +1}-`
		  else dateString += `${date.getMonth() +1}-`

		  if(date.getDate() < 10) dateString += `0${date.getDate()}`
		  else dateString += `${date.getDate()}`

		  return dateString
	}

