$(document).ready(function(){

	var dsMaBX=[];
	var dsBienSoXe=[];
	var dsMaTX=[];
	var dsMaCX=[];
	var dsEmail=[];

	
	
	$('#MaTX-ChuyenXe').click(function(){
		$(".optagBX").remove();
		
		getDiemDi();
		getDiemDen();
		
	});
	$('#MaBXDi').click(function(){
		$(".optagX").remove();
		
		getBienSoXe();
		
	});
	
	//nhan data tu csdl
	async function getAllMaBenXe(){
		const response=await fetch('http://localhost:5000/benxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			    
				$("#MaBX-Xe").append(`<option>${data[i].MaBX}</option>`);
			}
	}
	async function getAllMaTuyenXe(){
		const response=await fetch('http://localhost:5000/tuyenxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
				$("#MaTX-ChuyenXe").append(`<option>${data[i].MaTX}</option>`);
			}
	}
	async function getBienSoXe(){
		const response=await fetch(`http://localhost:5000/biensoxe/${$('#MaBXDi').val()}`);
		const data= await response.json();
		for(var i=0;i < data.length;i++){
				$("#BienSoXe-ChuyenXe").append(`<option class="optagX">${data[i].BienSoXe}</option>`);
			}
	}
	
	async function getDiemDi(){
		console.log("ksks")
		const response=await fetch(`http://localhost:5000/diemdi/${$('#MaTX-ChuyenXe').val()}`);
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			$("#MaBXDi").append(`<option class="optagBX">${data[i].MaBX}</option>`);
		}
	}
	async function getDiemDen(){
		const response=await fetch(`http://localhost:5000/diemden/${$('#MaTX-ChuyenXe').val()}`);
		const data= await response.json();
		for(var i=0;i < data.length;i++){
				$("#MaBXDen").append(`<option class="optagBX">${data[i].MaBX}</option>`);
			}
	}
	async function getAllBenXe(){
		const response=await fetch('http://localhost:5000/benxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			dsMaBX.push(data[i].MaBX);
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].MaBX+'</td>'+'<td>'+data[i].TenBX+'</td>'+'<td>'+data[i].DiaChi+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-benxe").append(
					'<tr style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-benxe").attr('height'))+20;
				$("#table-benxe").attr('height',String(newHeight));
			}else{
				$("#table-benxe").append(
					'<tr>'+element);
				var newHeight=Number($("#table-benxe").attr('height'))+20;
				$("#table-benxe").attr('height',String(newHeight));
			}
				
				
			}
	}
	
	async function getAllXe(){
		const response=await fetch('http://localhost:5000/xe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			dsBienSoXe.push(data[i].BienSoXe);
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].BienSoXe+'</td>'+'<td>'+data[i].LoaiXe+'</td>'+'<td>'+String(data[i].SoChoNgoi)+'</td>'+'<td>'+data[i].MaBX+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-xe").append(
					'<tr style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-xe").attr('height'))+20;
				$("#table-xe").attr('height',String(newHeight));
			}else{
				$("#table-xe").append(
					'<tr>'+element);
				var newHeight=Number($("#table-xe").attr('height'))+20;
				$("#table-xe").attr('height',String(newHeight));
			}
				
				
			}
	}
	
	async function getAllTuyenXe(){
		const response= await fetch('http://localhost:5000/tuyenxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			dsMaTX.push(data[i].MaTX);
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].MaTX+'</td>'+'<td>'+data[i].DiemDi+'</td>'+'<td>'+data[i].DiemDen+'</td>'+'<td>'+data[i].DonGia+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-tuyenxe").append(
					'<tr style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-tuyenxe").attr('height'))+20;
				$("#table-tuyenxe").attr('height',String(newHeight));
			}else{
				$("#table-tuyenxe").append(
					'<tr>'+element);
				var newHeight=Number($("#table-tuyenxe").attr('height'))+20;
				$("#table-tuyenxe").attr('height',String(newHeight));
			}
				
				
			}
	}
	
	async function getAllChuyenXe(){
		const response= await fetch('http://localhost:5000/chuyenxe');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			dsMaCX.push(data[i].MaCX);
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].MaCX+'</td>'+'<td>'+data[i].MaTX+'</td>'+'<td>'+data[i].BienSoXe+'</td>'+'<td>'+data[i].MaBXDi+'</td>'+'<td>'+data[i].MaBXDen+'</td>'+'<td>'+data[i].NgayDi+'</td>'+'<td>'+data[i].GioDi+'</td>'+'<td>'+data[i].SoVeHienCon+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-chuyenxe").append(
					'<tr style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-chuyenxe").attr('height'))+20;
				$("#table-chuyenxe").attr('height',String(newHeight));
			}else{
				$("#table-chuyenxe").append(
					'<tr>'+element);
				var newHeight=Number($("#table-chuyenxe").attr('height'))+20;
				$("#table-chuyenxe").attr('height',String(newHeight));
			}
				
				
			}
	}
	
	async function getAllKhachHang(){
		const response= await fetch('http://localhost:5000/khachhang');
		const data= await response.json();
		for(var i=0;i < data.length;i++){
			dsEmail.push(data[i].Email);
			var element='<td>'+String((Number(i)+1))+'</td>'+'<td>'+data[i].Email+'</td>'+'<td>'+data[i].TenKH+'</td>'+'<td>'+data[i].SDT+'</td>'+'<td>'+data[i].GioiTinh+'</td>'+'<td>'+data[i].DiaChi+'</td>'+'</tr>';
			if(i%2==0){
				$("#table-khachhang").append(
					'<tr style="background-color: #E4E4E4;">'+element);
				var newHeight=Number($("#table-khachhang").attr('height'))+20;
				$("#table-khachhang").attr('height',String(newHeight));
			}else{
				$("#table-khachhang").append(
					'<tr>'+element);
				var newHeight=Number($("#table-khachhang").attr('height'))+20;
				$("#table-khachhang").attr('height',String(newHeight));
			}
				
				
			}
	}
	
	
	
	//lay ds MaVeXe
	
	
	getAllBenXe();
	
	getAllMaBenXe();
	
	getAllMaTuyenXe();
	
	getAllXe();
	
	getAllTuyenXe();
	
	getAllChuyenXe();
	
	getAllKhachHang();
	
	
	
	//Check dieu kien
	
	function checkMaBX(){
		for(var i=0;i<dsMaBX.length;i++){
			if($('#MaBX').val()==dsMaBX[i])return false;
		}
		return true;
	}
	function checkBienSoXe(){
		for(var i=0;i<dsBienSoXe.length;i++){
			if($('#BienSoXe').val()==dsBienSoXe[i])return false;
		}
		return true;
	}
	function checkMaTX(){
		for(var i=0;i<dsMaTX.length;i++){
			if($('#MaTX').val()==dsMaTX[i])return false;
		}
		return true;
	}
	function checkMaCX(){
		for(var i=0;i<dsMaCX.length;i++){
			if($('#MaCX').val()==dsMaCX[i])return false;
		}
		return true;
	}
	function checkEmail(){
		for(var i=0;i<dsEmail.length;i++){
			if($('#Email-KhachHang').val()==dsEmail[i])return false;
		}
		return true;
	}
	/*
	function checkChuyenXe(){
		const response= await fetch('http://localhost:5000/chuyenxe');
		const data= await response.json();
		for(var i=0;i<data.length;i++){
			if($('#BienSoXe-ChuyenXe').val()==data[i].BienSoXe && String($('#NgayDi').val())==data[i].NgayDi && String($('#GioDi').val())==data[i].GioDi)return 0;
		}
		return 1;
	}
	*/
	
	//them xoa sua ben xe
	$('#buttonInsertBenXe').click(function(){
		
		if($('#MaBX').val()==''||$('#TenBX').val()==''||$('#DiaChi').val()==''){
			alert('Thông tin Không được bỏ trống');
		}
		else{
			if(checkMaBX()==false) alert('MaBX không được trùng !!');
			else{
				fetch('http://localhost:5000/benxe',{
					method: 'POST',
        			headers:{
            			'Content-Type' :'application/json'
        			},
        			body: JSON.stringify({
          				'MaBX':$('#MaBX').val(),
		  				'TenBX':$('#TenBX').val(),
		  				'DiaChi':$('#DiaChi').val()
        			})
				})
				alert(`Ben Xe ${$('#MaBX').val()} Added `);
				location.reload();
			}
			
		}
	});
	$('#buttonUpdateBenXe').click(function(){
		if($('#MaBX').val()==''||$('#TenBX').val()==''||$('#DiaChi').val()==''){
			alert('Thông tin Không được bỏ trống');
		}
		else{
			if(checkMaBX()==true) alert('MaBX không tồn tại');
			else{
				fetch(`http://localhost:5000/benxe/${$('#MaBX').val()}`,{
					method: 'PUT',
        			headers:{
            			'Content-Type' :'application/json'
        			},
					body: JSON.stringify({
						'MaBX':$('#MaBX').val(),
						'TenBX':$('#TenBX').val(),
		  				'DiaChi':$('#DiaChi').val()
        			})
				})
			
				alert(`Ben Xe ${$('#MaBX').val()} Updated `);
				location.reload();
			}
			
		}
		
	});
	$('#buttonDeleteBenXe').click(function(){
		if($('#MaBX').val()==''){
			alert('MaBX Không được bỏ trống');
		}
		else{
			if(checkMaBX()==true) alert('MaBX không tồn tại');
			else{
				fetch(`http://localhost:5000/benxe/${$('#MaBX').val()}`,{
					method: 'DELETE',
        			headers:{
            			'Content-Type' :'application/json'
        			}
				})
			
				alert(`Ben Xe ${$('#MaBX').val()} Deleted `);
				location.reload();
			}
			
		}
		
	});
	
	//them xoa sua xe
	$('#buttonInsertXe').click(function(){
		if($('#BienSoXe').val()==''){
			alert('BienSoXe Không được bỏ trống');
		}
		else{
			if(checkBienSoXe()==false) alert('BienSoXe không được trùng !!');
			else{
				fetch('http://localhost:5000/xe',{
					method: 'POST',
        			headers:{
            			'Content-Type' :'application/json'
        			},
        			body: JSON.stringify({
          				'BienSoXe':$('#BienSoXe').val(),
		  				'LoaiXe':$('#LoaiXe').val(),
		  				'SoChoNgoi':$('#SoChoNgoi').val(),
						'MaBX':$('#MaBX-Xe').val()
        			})
				})
			
				alert(`Xe ${$('#BienSoXe').val()} Added `);
				location.reload();
			}
			
		}
		
		
	});
	$('#buttonUpdateXe').click(function(){
		if($('#BienSoXe').val()==''){
			alert('BienSoXe Không được bỏ trống');
		}
		else{
			if(checkBienSoXe()==true) alert('BienSoXe không tồn tại !!');
			else{
				fetch(`http://localhost:5000/xe/${$('#BienSoXe').val()}`,{
					method: 'PUT',
        			headers:{
            			'Content-Type' :'application/json'
        			},
        			body: JSON.stringify({
          				'BienSoXe':$('#BienSoXe').val(),
		  				'LoaiXe':$('#LoaiXe').val(),
		  				'SoChoNgoi':$('#SoChoNgoi').val(),
						'MaBX':$('#MaBX-Xe').val()
        			})
				})
			
				alert(`Xe ${$('#BienSoXe').val()} Updated `);
				location.reload();
			}
		}
		
	});
	$('#buttonDeleteXe').click(function(){
		if($('#BienSoXe').val()==''){
			alert('BienSoXe Không được bỏ trống');
		}
		else{
			if(checkBienSoXe()==true) alert('BienSoXe không tồn tại !!');
			else{
				fetch(`http://localhost:5000/xe/${$('#BienSoXe').val()}`,{
					method: 'DELETE',
        			headers:{
            			'Content-Type' :'application/json'
        			}
				})
			
				alert(`Xe ${$('#BienSoXe').val()} Deleted `);
				location.reload();
			}
			
		}
		
	});
	
	
	//them xoa sua tuyen xe
	$('#buttonInsertTuyenXe').click(function(){
		if($('#MaTX').val()==''||$('#DonGia').val()==''){
			alert('MaTX Không được bỏ trống');
		}
		else{
			if(checkMaTX()==false) alert('MaTX không được trùng');
			if($('#DiemDi').val()==$('#DiemDen').val())alert('DiemDi va DiemDen khong duoc trung');
			else{
				fetch('http://localhost:5000/tuyenxe',{
					method: 'POST',
        			headers:{
            			'Content-Type' :'application/json'
        			},
        			body: JSON.stringify({
          				'MaTX':$('#MaTX').val(),
		  				'DiemDi':$('#DiemDi').val(),
						'DiemDen':$('#DiemDen').val(),
						'DonGia':$('#DonGia').val()
        			})
				})
			
				alert(`Tuyen Xe ${$('#MaTX').val()} Added `);
				location.reload();
			}
			
		}
		
		
	});
	$('#buttonUpdateTuyenXe').click(function(){
		if($('#MaTX').val()==''){
			alert('MaTX Không được bỏ trống');
		}
		else{
			if(checkMaTX()==true) alert('MaTX không tồn tại');
			if($('#DiemDi').val()==$('#DiemDen').val())alert('DiemDi va DiemDen khong duoc trung');
			else{
				fetch(`http://localhost:5000/tuyenxe/${$('#MaTX').val()}`,{
					method: 'PUT',
        			headers:{
            			'Content-Type' :'application/json'
        			},
					body: JSON.stringify({
          				'MaTX':$('#MaTX').val(),
		  				'DiemDi':$('#DiemDi').val(),
						'DiemDen':$('#DiemDen').val(),
						'DonGia':$('#DonGia').val()
        			})
				})
			
				alert(`Tuyen Xe ${$('#MaTX').val()} Updated `);
				location.reload();
			}
			
		}
		
	});
	$('#buttonDeleteTuyenXe').click(function(){
		if($('#MaTX').val()==''){
			alert('MaTX Không được bỏ trống');
		}
		else{
			if(checkMaTX()==true) alert('MaTX không tồn tại');
			else{
				fetch(`http://localhost:5000/tuyenxe/${$('#MaTX').val()}`,{
					method: 'DELETE',
        			headers:{
            			'Content-Type' :'application/json'
        			}
				})
			
				alert(`Tuyen Xe ${$('#MaTX').val()} Deleted `);
				location.reload();
			}
			
		}
		
	});
	
	//them xoa sua chuyen xe
	$('#buttonInsertChuyenXe').click(function(){
		if($('#MaCX').val()==''||$('#MaTX-ChuyenXe').val()==''||$('#BienSoXe-ChuyenXe').val()==''||$('#MaBXDi').val()==''||$('#MaBXDen').val()==''||$('#NgayDi').val()==''||$('#GioDi').val()==''||$('#SoVeHienCon').val()==''){
			alert('Thông tin Không được bỏ trống');
		}
		else{
			if(checkMaCX()==false) alert('MaCX không được trùng');
			//if(checkChuyenXe()==0) alert('Chuyen Xe khong the them');
			else{
				fetch('http://localhost:5000/chuyenxe',{
					method: 'POST',
        			headers:{
            			'Content-Type' :'application/json'
        			},
        			body: JSON.stringify({
          				'MaCX':$('#MaCX').val(),
						'MaTX':$('#MaTX-ChuyenXe').val(),
						'BienSoXe':$('#BienSoXe-ChuyenXe').val(),
						'MaBXDi':$('#MaBXDi').val(),
						'MaBXDen':$('#MaBXDen').val(),
						'NgayDi':$('#NgayDi').val(),
						'GioDi':$('#GioDi').val(),
						'SoVeHienCon':$('#SoVeHienCon').val()
        			})
				})
			
				alert(`Chuyen Xe ${$('#MaCX').val()} Added `);
				location.reload();
			}
			
		}
		
		
	});
	$('#buttonUpdateChuyenXe').click(function(){
		if($('#MaCX').val()==''||$('#MaTX-ChuyenXe').val()==''||$('#BienSoXe-ChuyenXe').val()==''||$('#MaBXDi').val()==''||$('#MaBXDen').val()==''||$('#NgayDi').val()==''||$('#GioDi').val()==''||$('#SoVeHienCon').val()==''){
			alert('Thông tin Không được bỏ trống');
		}
		else{
			if(checkMaCX()==true) alert('MaCX không tồn tại');
			//if(checkChuyenXe()==0) alert('Chuyen Xe khong the them');
			else{
				fetch(`http://localhost:5000/chuyenxe/${$('#MaCX').val()}`,{
					method: 'PUT',
        			headers:{
            			'Content-Type' :'application/json'
        			},
					body: JSON.stringify({
          				'MaCX':$('#MaCX').val(),
						'MaTX':$('#MaTX-ChuyenXe').val(),
						'BienSoXe':$('#BienSoXe-ChuyenXe').val(),
						'MaBXDi':$('#MaBXDi').val(),
						'MaBXDen':$('#MaBXDen').val(),
						'NgayDi':$('#NgayDi').val(),
						'GioDi':$('#GioDi').val(),
						'SoVeHienCon':$('#SoVeHienCon').val()
        			})
				})
			
				alert(`Chuyen Xe ${$('#MaCX').val()} Updated `);
				location.reload();
			}
			
		}
		
	});
	$('#buttonDeleteChuyenXe').click(function(){
		if($('#MaCX').val()==''){
			alert('MaCX Không được bỏ trống');
		}
		else{
			if(checkMaCX()==true) alert('MaCX không tồn tại');
			else{
				fetch(`http://localhost:5000/chuyenxe/${$('#MaCX').val()}`,{
					method: 'DELETE',
        			headers:{
            			'Content-Type' :'application/json'
        			}
				})
			
				alert(`Cuyen Xe ${$('#MaCX').val()} Deleted `);
				location.reload();
			}
			
		}
		
	});
	//sua thong tin khach hang
	$('#buttonUpdateKhachHang').click(function(){
		if($('#Email-KhachHang').val()==''||$('#TenKH').val()==''||$('#SDT').val()==''||$('#DiaChi').val()==''){
			alert('Thông tin Không được bỏ trống');
		}
		else{
			if(checkEmail()==true) alert('Email không tồn tại');
			else{
				fetch(`http://localhost:5000/khachhang/${$('#Email-KhachHang').val()}`,{
					method: 'PUT',
        			headers:{
            			'Content-Type' :'application/json'
        			},
					body: JSON.stringify({
          				'Email': $('#Email-KhachHang').val(),
						'TenKH': $('#TenKH').val(),
						'SDT': $('#SDT').val(),
						'GioiTinh': $('#GioiTinh').val(),
						'DiaChi': $('#DiaChi').val()
        			})
				})
			
				alert(`Khach Hang ${$('#Email-KhachHang').val()} Updated `);
				location.reload();
			}
			
		}
	});
	
	
	
});