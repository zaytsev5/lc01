$(document).ready(()=>{
	async function getAllUser(){
		$('.trash').remove();
		$("#table-user").attr('height',20);
		const response=await fetch('http://localhost:5000/getallUsers');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].name+'</td>'+'<td>'+data[i].email+'</td>'+'<td>'+data[i].role+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-user").append(
					'<tr class="trash" style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-user").attr('height'))+20;
				$("#table-user").attr('height',String(newHeight));
			}else{
				$("#table-user").append(
					'<tr class="trash">'+element);
				var newHeight=Number($("#table-user").attr('height'))+20;
				$("#table-user").attr('height',String(newHeight));
			}
				
				
			}
	}
	getAllUser();
	async function getAllBenXe(){
		$('.trash').remove();
		$("#table-benxe").attr('height',20);
		const response=await fetch('http://localhost:5000/benxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].MaBX+'</td>'+'<td>'+data[i].TenBX+'</td>'+'<td>'+data[i].DiaChi+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-benxe").append(
					'<tr class="trash" style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-benxe").attr('height'))+20;
				$("#table-benxe").attr('height',String(newHeight));
			}else{
				$("#table-benxe").append(
					'<tr class="trash">'+element);
				var newHeight=Number($("#table-benxe").attr('height'))+20;
				$("#table-benxe").attr('height',String(newHeight));
			}
				
				
			}
	}
	
	async function getAllXe(){
		$('.trash').remove();
		$("#table-xe").attr('height',20);
		const response=await fetch('http://localhost:5000/xe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].BienSoXe+'</td>'+'<td>'+data[i].LoaiXe+'</td>'+'<td>'+String(data[i].SoChoNgoi)+'</td>'+'<td>'+data[i].MaBX+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-xe").append(
					'<tr class="trash" style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-xe").attr('height'))+20;
				$("#table-xe").attr('height',String(newHeight));
			}
			else{
				$("#table-xe").append(
					'<tr class="trash">'+element);
				var newHeight=Number($("#table-xe").attr('height'))+20;
				$("#table-xe").attr('height',String(newHeight));
			}
				
				
			}
	}
	
	async function getAllTuyenXe(){
		$('.trash').remove();
		$("#table-tuyenxe").attr('height',20);
		const response= await fetch('http://localhost:5000/tuyenxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].MaTX+'</td>'+'<td>'+data[i].DiemDi+'</td>'+'<td>'+data[i].DiemDen+'</td>'+'<td>'+data[i].DonGia+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-tuyenxe").append(
					'<tr class="trash" style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-tuyenxe").attr('height'))+20;
				$("#table-tuyenxe").attr('height',String(newHeight));
			}else{
				$("#table-tuyenxe").append(
					'<tr class="trash">'+element);
				var newHeight=Number($("#table-tuyenxe").attr('height'))+20;
				$("#table-tuyenxe").attr('height',String(newHeight));
			}
				
				
		}
	}
	
	async function getAllChuyenXe(){
		$('.trash').remove();
		$("#table-chuyenxe").attr('height',20);
		const response= await fetch('http://localhost:5000/chuyenxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].MaCX+'</td>'+'<td>'+data[i].MaTX+'</td>'+'<td>'+data[i].BienSoXe+'</td>'+'<td>'+data[i].MaBXDi+'</td>'+'<td>'+data[i].MaBXDen+'</td>'+'<td>'+data[i].NgayDi+'</td>'+'<td>'+data[i].GioDi+'</td>'+'<td>'+data[i].SoVeHienCon+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-chuyenxe").append(
					'<tr class="trash" style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-chuyenxe").attr('height'))+20;
				$("#table-chuyenxe").attr('height',String(newHeight));
			}else{
				$("#table-chuyenxe").append(
					'<tr class="trash">'+element);
				var newHeight=Number($("#table-chuyenxe").attr('height'))+20;
				$("#table-chuyenxe").attr('height',String(newHeight));
			}
				
				
			}
	}
	
	async function getAllKhachHang(){
		$('.trash').remove();
		$("#table-khachhang").attr('height',20);
		const response= await fetch('http://localhost:5000/khachhang');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].Email+'</td>'+'<td>'+data[i].TenKH+'</td>'+'<td>'+data[i].SDT+'</td>'+'<td>'+data[i].GioiTinh+'</td>'+'<td>'+data[i].DiaChi+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-khachhang").append(
					'<tr class="trash" style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-khachhang").attr('height'))+20;
				$("#table-khachhang").attr('height',String(newHeight));
			}else{
				$("#table-khachhang").append(
					'<tr class="trash">'+element);
				var newHeight=Number($("#table-khachhang").attr('height'))+20;
				$("#table-khachhang").attr('height',String(newHeight));
			}
				
				
		}
	}
	
	async function getAllTaiKhoan(){
		const response=await fetch('http://localhost:5000/taikhoan');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].Email+'</td>'+'<td>'+data[i].Pass+'</td>'+'<td>'+data[i].SoDu+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-taikhoan").append(
					'<tr style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-taikhoan").attr('height'))+20;
				$("#table-taikhoan").attr('height',String(newHeight));
			}else{
				$("#table-taikhoan").append(
					'<tr>'+element);
				var newHeight=Number($("#table-taikhoan").attr('height'))+20;
				$("#table-taikhoan").attr('height',String(newHeight));
			}
				
				
			}
	}
	
	async function getAllVeXe(){
		$('.trash').remove();
		$("#table-vexe").attr('height',20);
		const response=await fetch('http://localhost:5000/vexe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].MaVeXe+'</td>'+'<td>'+data[i].MaCX+'</td>'+'<td>'+data[i].SoGhe+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-vexe").append(
					'<tr class="trash" style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-vexe").attr('height'))+20;
				$("#table-vexe").attr('height',String(newHeight));
			}else{
				$("#table-vexe").append(
					'<tr class="trash">'+element);
				var newHeight=Number($("#table-vexe").attr('height'))+20;
				$("#table-vexe").attr('height',String(newHeight));
			}
				
				
			}
	}
	async function getAllHoaDon(){
		$('.trash').remove();
		$("#table-hoadon").attr('height',20);
		const response=await fetch('http://localhost:5000/hoadon');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].MaHD+'</td>'+'<td>'+data[i].MaVeXe+'</td>'+'<td>'+data[i].Email+'</td>'+'<td>'+data[i].NgayDat+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-hoadon").append(
					'<tr class="trash" style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-hoadon").attr('height'))+20;
				$("#table-hoadon").attr('height',String(newHeight));
			}else{
				$("#table-hoadon").append(
					'<tr class="trash">'+element);
				var newHeight=Number($("#table-hoadon").attr('height'))+20;
				$("#table-hoadon").attr('height',String(newHeight));
			}
				
				
			}
	}
	
	
	
	getAllBenXe();
	
	getAllXe();
	
	getAllTuyenXe();
	
	getAllChuyenXe();
	
	getAllKhachHang();
	
	getAllTaiKhoan();
	
	getAllVeXe();
	
	getAllHoaDon();

	
	
	
	//lay ra ben xe co thuoc tinh giong voi searchText
	async function getSearchBenXe(){
		$('.trash').remove();
		$("#table-benxe").attr('height',20);
		var index=0;
		var text=$('#searchText').val();
		const response=await fetch('http://localhost:5000/benxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			if(data[i].MaBX.search(text)>-1||data[i].TenBX.search(text)>-1||data[i].DiaChi.search(text)>-1){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].MaBX+'</td>'+'<td>'+data[i].TenBX+'</td>'+'<td>'+data[i].DiaChi+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-benxe").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-benxe").attr('height'))+20;
					$("#table-benxe").attr('height',String(newHeight));
				}else{
					$("#table-benxe").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-benxe").attr('height'))+20;
					$("#table-benxe").attr('height',String(newHeight));
				}
				index++;
			}		
		}
	}
	
	async function getSearchXe(){
		$('.trash').remove();
		$("#table-xe").attr('height',20);
		var index=0;
		var text=$('#searchText').val();
		const response=await fetch('http://localhost:5000/xe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			if(data[i].BienSoXe.search(text)>-1||data[i].LoaiXe.search(text)>-1||data[i].MaBX.search(text)>-1){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].BienSoXe+'</td>'+'<td>'+data[i].LoaiXe+'</td>'+'<td>'+String(data[i].SoChoNgoi)+'</td>'+'<td>'+data[i].MaBX+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-xe").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-xe").attr('height'))+20;
					$("#table-xe").attr('height',String(newHeight));
				}
				else{
					$("#table-xe").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-xe").attr('height'))+20;
					$("#table-xe").attr('height',String(newHeight));
				}
				index++;
			}	
		}
	}
	async function getSearchTuyenXe(){
		$('.trash').remove();
		$("#table-tuyenxe").attr('height',20);
		var index=0;
		var text=$('#searchText').val();
		const response= await fetch('http://localhost:5000/tuyenxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			if(data[i].MaTX.search(text)>-1||data[i].DiemDi.search(text)>-1||data[i].DiemDen.search(text)>-1||String(data[i].DonGia)==text){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].MaTX+'</td>'+'<td>'+data[i].DiemDi+'</td>'+'<td>'+data[i].DiemDen+'</td>'+'<td>'+data[i].DonGia+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-tuyenxe").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-tuyenxe").attr('height'))+20;
					$("#table-tuyenxe").attr('height',String(newHeight));
				}else{
					$("#table-tuyenxe").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-tuyenxe").attr('height'))+20;
					$("#table-tuyenxe").attr('height',String(newHeight));
				}
				index++;
			}		
		}
	}
	
	async function getSearchChuyenXe(){
		$('.trash').remove();
		$("#table-chuyenxe").attr('height',20);
		var index=0;
		var text=$('#searchText').val();
		const response= await fetch('http://localhost:5000/chuyenxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			if(data[i].MaCX.search(text)>-1||data[i].MaTX.search(text)>-1||data[i].BienSoXe.search(text)>-1||data[i].MaBXDi.search(text)>-1||data[i].MaBXDen.search(text)>-1||String(data[i].NgayDi).search(text)>-1||String(data[i].GioDi).search(text)>-1||String(data[i].SoVeHienCon)==text){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].MaCX+'</td>'+'<td>'+data[i].MaTX+'</td>'+'<td>'+data[i].BienSoXe+'</td>'+'<td>'+data[i].MaBXDi+'</td>'+'<td>'+data[i].MaBXDen+'</td>'+'<td>'+data[i].NgayDi+'</td>'+'<td>'+data[i].GioDi+'</td>'+'<td>'+data[i].SoVeHienCon+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-chuyenxe").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-chuyenxe").attr('height'))+20;
					$("#table-chuyenxe").attr('height',String(newHeight));
				}else{
					$("#table-chuyenxe").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-chuyenxe").attr('height'))+20;
					$("#table-chuyenxe").attr('height',String(newHeight));
				}
				index++;
			}		
		}
	}
	
	async function getSearchKhachHang(){
		$('.trash').remove();
		$("#table-khachhang").attr('height',20);
		var index=0;
		var text=$('#searchText').val();
		const response= await fetch('http://localhost:5000/khachhang');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			if(data[i].Email.search(text)>-1||data[i].TenKH.search(text)>-1||data[i].SDT.search(text)>-1||data[i].GioiTinh.search(text)>-1||data[i].DiaChi.search(text)>-1){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].Email+'</td>'+'<td>'+data[i].TenKH+'</td>'+'<td>'+data[i].SDT+'</td>'+'<td>'+data[i].GioiTinh+'</td>'+'<td>'+data[i].DiaChi+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-khachhang").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-khachhang").attr('height'))+20;
					$("#table-khachhang").attr('height',String(newHeight));
				}else{
					$("#table-khachhang").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-khachhang").attr('height'))+20;
					$("#table-khachhang").attr('height',String(newHeight));
				}
				index++;
			}
					
		}
	}
	
	async function getSearchVeXe(){
		$('.trash').remove();
		$("#table-vexe").attr('height',20);
		var index=0;
		var text=$('#searchText').val();
		const response=await fetch('http://localhost:5000/vexe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			if(data[i].MaVeXe.search(text)>-1||data[i].MaCX.search(text)>-1||data[i].SoGhe==Number(text)){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].MaVeXe+'</td>'+'<td>'+data[i].MaCX+'</td>'+'<td>'+data[i].SoGhe+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-vexe").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-vexe").attr('height'))+20;
					$("#table-vexe").attr('height',String(newHeight));
				}else{
					$("#table-vexe").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-vexe").attr('height'))+20;
					$("#table-vexe").attr('height',String(newHeight));
				}
				index++;
			}
		}
	}
	
	async function getSearchHoaDon(){
		$('.trash').remove();
		$("#table-hoadon").attr('height',20);
		var index=0;
		var text=$('#searchText').val();
		const response=await fetch('http://localhost:5000/hoadon');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			if(data[i].MaHD.search(text)>-1||data[i].MaVeXe.search(text)>-1||data[i].Email.search(text)>-1||String(data[i].NgayDat).search(text)>-1){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].MaHD+'</td>'+'<td>'+data[i].MaVeXe+'</td>'+'<td>'+data[i].Email+'</td>'+'<td>'+data[i].NgayDat+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-hoadon").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-hoadon").attr('height'))+20;
					$("#table-hoadon").attr('height',String(newHeight));
				}else{
					$("#table-hoadon").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-hoadon").attr('height'))+20;
					$("#table-hoadon").attr('height',String(newHeight));
				}
				index++;
			}
		}
			
	}
	async function getAllTicketsCancled(){
		console.log("haha")
		$('.trash').remove();
		$("#table-hoadon").attr('height',20);
		const res = await fetch('http://localhost:5000/allTickets');
		const data = await res.json();
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
	async function getASearchUser(){
		$('.trash').remove();
		$("#table-user").attr('height',20);
		var index=0;
		var text=$('#searchText').val();
		const response=await fetch('http://localhost:5000/getallUsers');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			if(data[i].name.search(text)>-1||data[i].email.search(text)>-1||data[i].role.search(text)>-1){
				var element='<td>'+String((Number(index)+1))+'</td>'+'<td>'+data[i].name+'</td>'+'<td>'+data[i].email+'</td>'+'<td>'+data[i].role+'</td>'+'</tr>';
				if(index%2==0){
					$("#table-user").append(
						'<tr class="trash" style="background-color: #E4E4E4;">'+element);
					var newHeight=Number($("#table-user").attr('height'))+20;
					$("#table-user").attr('height',String(newHeight));
				}else{
					$("#table-user").append(
						'<tr class="trash">'+element);
					var newHeight=Number($("#table-user").attr('height'))+20;
					$("#table-user").attr('height',String(newHeight));
				}
				index++;
			}
			
				
				
		}
	}
	//click button tim kiem
	$("#buttonSearchBenXe").click(function(){	
		if($('#searchText').val()=="")getAllBenXe();
		else getSearchBenXe();
	});
	$("#buttonSearchXe").click(function(){	
		if($('#searchText').val()=="")getAllXe();
		else getSearchXe();
	});
	$("#buttonSearchTuyenXe").click(function(){	
		if($('#searchText').val()=="")getAllTuyenXe();
		else getSearchTuyenXe();
	});
	$("#buttonSearchChuyenXe").click(function(){	
		if($('#searchText').val()=="")getAllChuyenXe();
		else getSearchChuyenXe();
	});
	$("#buttonSearchKhachHang").click(function(){	
		if($('#searchText').val()=="")getAllKhachHang();
		else getSearchKhachHang();
	});
	$("#buttonSearchVeXe").click(function(){	
		if($('#searchText').val()=="")getAllVeXe();
		else getSearchVeXe();
	});
	$("#buttonSearchHoaDon").click(function(){	
		if($('#searchText').val()=="")getAllHoaDon();
		else getSearchHoaDon();
	});
	$("#buttonSearchUser").click(function(){	
		if($('#searchText').val()=="")getAllUser();
		else getASearchUser();
	});
	$(".buttonReload").click(function(){	
		$("#searchText").attr("value","");
		
		getAllBenXe();
	
		getAllXe();
	
		getAllTuyenXe();
	
		getAllChuyenXe();
	
		getAllKhachHang();
	
		getAllVeXe();
	
		getAllHoaDon();

	});
});