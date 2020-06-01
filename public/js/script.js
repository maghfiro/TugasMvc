$(function(){

  $(function(){

    $('.tombolTambahData').on('click', function(){
        $('#judulModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');

    });

    $('.tampilModalUbah').on('click', function(){
        $('#judulModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Edit Data');
        $('.modal-body form').attr('action', 'http://localhost/phpmvcfikir/public/mahasiswa/ubah');
        const id = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost/phpmvcfikir/public/mahasiswa/getUbah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $('#email').val(data.email);
                $('#sekolah').val(data.sekolah);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }

        });

      });
    });
  });
  