async function findTickets(){
	if($('#date-cancle').val().length <= 0) {
		document.querySelector('#buttonDuyetVeHuy').disabled = true;
		return alert("Vui lòng điền ngày")
	}
	const response = await fetch(`http://localhost:5000/ticket/cancled/${$('#date-cancle').val().split('/').reverse().join("-")}`)
	const data  = await response.json();
	var index =0;
		if(data.length <= 0) {
			alert("Không có vé hủy")
			return document.querySelector('#buttonDuyetVeHuy').disabled = true;
		}
		for(var i=0;i < data.length;i++){
			if(true){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].MaVeXe+'</td>'+'<td>'+data[i].Email+'</td>'+'<td>'+data[i].STK+'</td>'+'<td>'+data[i].DonGia+'</td>'+'<td>'+data[i].NgayHuy+'</td>'+'<td>'+data[i].TinhTrang+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-duyetvehuy").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-duyetvehuy").attr('height'))+20;
					$("#table-duyetvehuy").attr('height',String(newHeight));
				}else{
					$("#table-duyetvehuy").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-duyetvehuy").attr('height'))+20;
					$("#table-duyetvehuy").attr('height',String(newHeight));
				}
				index++;
			}
		}
		document.querySelector('#buttonDuyetVeHuy').disabled = false;
}
	async function approve(){
		console.log("CLiked")
		const res = await fetch(`http://localhost:5000/approveall/${$('#date-cancle').val().split('/').reverse().join("-")}`);
			const data = await res.json();
			if(data.is == false) return alert("Duyệt không thành công")
				alert("Duyệt thành công")
			window.location.href =window.location.href
	}
