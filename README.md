
<img width="1897" height="867" alt="image" src="https://github.com/user-attachments/assets/79939d0d-7536-4afc-a489-99ab86e656ed" />
Halaman Home

<img width="1919" height="1068" alt="image" src="https://github.com/user-attachments/assets/9370cc53-2ebe-41fc-9fe2-4654ac060aee" />
Halaman Login

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/02e065fc-d58a-4540-9d02-bb1ceb31b4de" />
Halaman Register



4.  Jawaban
perbedaan kernel x distro
kernel linux : merupakan bagian inti os yang berinteraksi langsung dengan hardware (CPU, memory, disk, network) dan software.

distro : merupakan penyedia OS lengkap dengan semua komponen lengkap yang berdiri diatas kernel itu sendiri.

Linux FHS (Filesystem Hierarchy Standard)
		merupakan standar yang mendefinisikan struktur direktori dan isi direktori 
	pada sistem operasi berbasis Unix seperti Linux, seperti saat ingin mengatur file
	penting seperti program di (/bin), lalu konfigurasi di (/etc), dan data pengguna di 
            (/home), agar aplikasi dan jika ingin mudah mencari file gunakan direktori root (/).

Sistem permission dan owner pada Linux
	digunakan untuk mengatur hak akses file/direktori untuk 3 kategori: Owner (pemilik), Group (grup), dan Other (lainnya). Di dalamnya terdapat 3 jenis akses yakni: Read (r) untuk melihat, Write (w) untuk mengubah/menghapus, dan Execute (x) untuk menjalankan. Untuk mengaturnya bisa menggunakan perintah command chown

Prinsip enkripsi pada SSH
SSH menggunakan kriptografi asimetris (key pair) saat handshake: yang dimana client membuktikan punya private key yang cocok dengan public key di server (authorized_key).

HTTP vs HTTPS
HTTP (Hypertext Transfer Protocol) adalah standar aturan/protokol dasar untuk transfer data di web.
HTTPS (HTTP Secure) adalah versi aman yang mengenkripsi data menggunakan license SSL/TLS untuk mencegah data disadap.
Docker OCI (Open Container Initiative) Complience Standard
Standar terbuka untuk format image dan runtime container agar kompatibel lintas tool (docker, container, podman)
OCI Image: menentukan struktur layer, manifest, config image.
OCI Runtime Spec: mendefinisikan bagaimana container dijalankan.

Perbedaan antara Container dan VM
Container
lebih ringan, start dalam hitungan detik, resource overhead kecil
contoh: docker container Nginx.
VM ( Virtual Machine )
Menjalankan OS lengkap diatas hypervisor (Virtual box)
Masing-masing punya kernel sendiri, sehingga lebih berat untuk dijalankan tapi isolasi kuat (setara mesin fisik).



Image layer di Docker
Definisi : Docker image tersusun dari beberapa layer read-only, tiap instruksi RUN, COPY, ADD di Dockerfile menambah 1 layer baru.
Manfaat : 
Reusability & cache : layer yang sama dipakai ulang banyak image/container, menghemat storage dan mempercepat build.
distribusi efisien

Docker volume dan network
Volume
Mekanisme menyimpan data di luar lifecycle, sehingga data tidak hilang saat container dihancurkan.
Contoh: docker volume create db-data lalu docker run 
Network
merupakan jaringan virtual yang menghubungkan container satu sama lain dan dengan host.
Contoh docker network create lalu jalankan app + db

Web server dan reverse-proxy
Web server
Definisi : perangkat lunak (software) dan keras (hardware) yang berfungsi untuk menyimpan, memproses, dan menyajikan konten website ke browser melalui protokol HTTP/HTTPS.
Tujuan: untuk menampilkan situs website, mengelola permintaan (request), mengamankan data, dan memastikan website berjalan lancar.
Reverse proxy
Definisi: server perantara yang menerima permintaan dari klien (pengguna) dan meneruskannya ke server dibelakangnya.
Tujuan: untuk mengelola lalu lintas, melindungi server, serta meningkatkan kecepatan dan kualitas web app secara keseluruhan.

