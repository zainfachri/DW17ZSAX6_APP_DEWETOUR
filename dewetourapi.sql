-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Sep 2020 pada 10.42
-- Versi server: 10.1.32-MariaDB
-- Versi PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dewetourapi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `countries`
--

INSERT INTO `countries` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Australia', '2020-08-13 00:00:00', '2020-08-18 02:22:31'),
(2, 'South Korea', '2020-08-13 00:00:00', '2020-08-13 00:00:00'),
(3, 'Japan', '2020-08-13 13:26:00', '2020-08-13 13:26:00'),
(4, 'Indonesia', '2020-08-13 13:28:29', '2020-08-13 13:28:29'),
(5, 'Singapore', '2020-08-21 00:00:00', '2020-08-21 00:00:00'),
(6, 'India', '2020-08-21 00:00:00', '2020-08-21 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200812142239-create-country.js'),
('20200812153157-create-trip.js'),
('20200820150253-create-user-role.js'),
('20200820150304-create-user.js'),
('20200822151403-create-transaction.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `counterQty` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `tripId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `counterQty`, `total`, `status`, `attachment`, `tripId`, `userId`, `createdAt`, `updatedAt`) VALUES
(27, 4, 49592000, 'Cancel', '1aa97ab435a1681a0a5a7bc1494ab218.jpg', 1, 2, '2020-08-24 07:13:48', '2020-08-24 08:20:30'),
(28, 5, 15940000, 'Approve', 'pranson-odbqt-wru4n-500x500.png', 4, 2, '2020-08-24 08:34:55', '2020-08-24 08:36:25'),
(36, 4, 107000000, 'Approve', '5248-a65eac3ffd1ad679a260aac9aa33627d_5587dd9676be6.jpg', 23, 10, '2020-08-24 17:44:32', '2020-08-24 17:45:51'),
(37, 3, 9564000, 'Cancel', 'hp-gas-booking-paytm.jpg', 4, 10, '2020-08-24 17:44:55', '2020-08-24 17:45:53'),
(38, 5, 71250000, 'Waiting Approve', 'pranson-odbqt-wru4n-500x500.png', 22, 10, '2020-08-24 17:45:05', '2020-08-24 17:45:05'),
(42, 3, 7500000, 'Approve', '5248-a65eac3ffd1ad679a260aac9aa33627d_5587dd9676be6.jpg', 26, 15, '2020-08-27 03:55:56', '2020-08-27 03:56:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `trips`
--

CREATE TABLE `trips` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `countryId` int(11) NOT NULL,
  `accomodation` varchar(255) DEFAULT NULL,
  `transportation` varchar(255) DEFAULT NULL,
  `eat` varchar(255) DEFAULT NULL,
  `day` int(11) DEFAULT NULL,
  `night` int(11) DEFAULT NULL,
  `dateTrip` date DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quota` int(11) DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `trips`
--

INSERT INTO `trips` (`id`, `title`, `countryId`, `accomodation`, `transportation`, `eat`, `day`, `night`, `dateTrip`, `price`, `quota`, `description`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Fun Tassie Vacation', 1, 'Hotel 4 Nights', 'Qatar Airways', 'included as Itinerary', 6, 4, '2020-08-26', 12398000, 15, 'liburan ke australia kali ini asik sekali', 'pic1.png', '2020-08-13 00:00:00', '2020-08-18 03:27:45'),
(2, 'Exciting Summer in', 2, 'Hotel', 'Citilink', 'Not Included', 6, 4, '2020-08-27', 10288000, 14, 'Nikmati liburmu dengan berjalan-jalan di Korea Selatan bersama dengan teman maupun keluarga anda.', 'pic2.png', '2020-08-17 00:00:00', '2020-08-17 00:00:00'),
(3, 'Wonderful Autum Japan', 3, 'Hotel', 'Batik Airways', 'Included', 8, 6, '2020-08-29', 28999000, 10, 'Berlibur di negeri sakura bukan lagi cuma sekedar mimpi, nikmati liburan di negeri sakura dengan harga murah dan fasilitas lengkap.', 'pic3.png', '2020-08-18 00:00:00', '2020-08-18 00:00:00'),
(4, 'Overland Jakarta ', 4, 'Hotel', 'Lion Air', 'Not Included', 4, 3, '2020-08-25', 3188000, 8, 'Hari liburmu membosankan? kunjungi Overland Jakarta, kami jamin waktu libur anda tidak akan membosankan lagi.', 'pic4.png', '2020-08-18 00:00:00', '2020-08-18 00:00:00'),
(5, 'Labuan Bajo Delight', 4, 'Hotel', 'Lion Air', 'Included', 4, 3, '2020-09-01', 10488000, 14, 'labuan Bajo Delight merupakan salah satu tempat wisata populer di indonesia, terdapat pemandangan yang akan memanjakan mata anda', 'pic5.png', '2020-08-17 00:00:00', '2020-08-17 00:00:00'),
(20, 'Magic Tokyo Fun', 3, 'Hotel', 'Garuda Airline', 'Included', 5, 4, '2020-08-26', 11188000, 10, 'Magic Tokyo Fun merupakan salah satu wisata populer yang berada di negara jepang dan merupakann wisata yang banyak dikunjungi wisatawan baik itu dalam negeri maupun wisatawan luar negeri.', 'pic6.png', '2020-08-21 12:20:15', '2020-08-21 12:20:15'),
(22, 'pemandangan 2', 4, 'Hotel', 'Boat', 'included', 2, 1, '2020-08-22', 14250000, 10, 'Wonderfull Indonesia', 'eiffel-tower-sunset-france-landscapes-photography-travel-destinations-beautiful-view-great-atmosphere.jpg', '2020-08-21 12:27:43', '2020-08-21 12:27:43'),
(23, 'Wonderful Town India', 6, 'Hotel', 'Garuda Airline', 'Included', 5, 4, '2020-08-22', 26750000, 12, 'Kunjungi kota-kota menarik dan unik di negara india, pastikan anda tidak melewatkan kesempatan ini.', 'a69f43e5fcdda5423de1c5a7ed9bcbf4.jfif', '2020-08-21 15:34:45', '2020-08-21 15:34:45'),
(24, 'Danau Toba Indonesia', 4, 'Hotel', 'Bus', 'Not Included', 3, 2, '2020-08-24', 6500000, 10, 'Lepas stress anda dengan mengunjungi wisata alam dengan pemandangan yang menyegarkan suasana dan menenangkan hati.', '1_hf_TMSMdWm0Q5H59_t8jSg.jpeg', '2020-08-21 15:37:04', '2020-08-21 15:37:04'),
(25, 'wonderful world', 3, 'Hotel', 'Garuda Airline', 'included', 3, 2, '2020-08-22', 42000000, 19, 'jalan-jalan yuk', 'the-leela-kovalam-kerala-india-travel-destinations-beautiful-photography-infinity-pool-great-gatsby-luxury-lifestyle-blue-sea.jpg', '2020-08-22 04:54:34', '2020-08-22 04:54:34'),
(26, 'Pantai Salju', 4, 'Hotel', 'Garuda Airline', 'included', 4, 3, '2020-08-27', 2500000, 10, 'Pesona Pantai Salju,  Deli Serdang Yang Selalu Menggoda\n\nMENEMUKAN air bersih dan sejuk dari sumber air alam sekitarnya sungguh sulit ditemukan dewasa ini. Sulitnya air bersih dan kotornya lingkungan membuat air pengunungan pun menjadi tercemar. Baik dari rumah tangga, industri maupun pabrik-pabrik yang merusak lingkungan dan tentu saja air. Manusia sangat membutuhkan air bersih dan itu mutlak.\n\nAir pegunungan berada di dataran yang tinggi, karena berada di dataran tinggi, maka air pegunungan akan mengandung oksigen yang lebih banyak dibandingkan dengan air yang berada di dataran rendah. Sehingga air pegunungan sangat menyehatkan tubuh.\n\nUntuk memanjakan tubuh kita dengan air pengunungan yang sejuk dan bersih anda dapat berkunjung ke Pantai Salju atau Pantai Bela di Kecamatan Bangun Purba, Deli Serdang, Sumatera Utara. Selain memanjakan tubuh, dapat juga memanjakan pemandangan alam desa lengkap dengan bebatuan. Ketika bertemu dengan pantai, sebenarnya bukanlah pantai laut, tapi karena air bersih dan sungainya luar, maka bibir sungai seperti bibir pantai. Akan tetapi, warga Bangun Purna menyebutnya pantai. Itulah sebabnya, tempat pemandian yang segar itu dinamakan Pantai Bela atau Pantai Salju.', 'summer.jpg', '2020-08-26 17:20:52', '2020-08-26 17:20:52'),
(27, 'Wonderful Singapore', 5, 'Hotel', 'Garuda Airline', 'included', 4, 3, '2020-08-29', 45000000, 15, 'perjalanan wisata ke singapur', 'pic1.png', '2020-08-27 03:58:56', '2020-08-27 03:58:56');

-- --------------------------------------------------------

--
-- Struktur dari tabel `userroles`
--

CREATE TABLE `userroles` (
  `id` int(11) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `userroles`
--

INSERT INTO `userroles` (`id`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2020-08-20 00:00:00', '2020-08-20 00:00:00'),
(2, 'user', '2020-08-20 00:00:00', '2020-08-20 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `roleId` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `userImg` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `fullName`, `roleId`, `email`, `password`, `phone`, `address`, `userImg`, `createdAt`, `updatedAt`) VALUES
(1, 'Dewe Tour Admin', 1, 'admindewe@gmail.com', '$2b$10$dq68qPRVOa.0BicU01.TH.at5ZKN6HC4iDQHh4NRSAslCPdVQmwPy', '082164894643', 'Jl.Cemara', '', '2020-08-20 15:30:40', '2020-08-20 15:30:40'),
(2, 'Dewe Tour', 2, 'dewe@gmail.com', '$2b$10$5UaNTeq79mRKkduOgAvZYesMERvTSs5zDbe03rMUKzDXJu2bpwUx2', '082164894643', 'Jl.Dewe', 'img1.jpg', '2020-08-20 15:31:03', '2020-08-24 09:29:31'),
(3, 'abcd', 2, 'abc@gmail.com', '$2b$10$1wwFbSep.8yxWLcy/MpFS.k/ybLGOBUDDjHNCil.iAtGn6RpKJRzG', '082345432345', 'Jl.Antara', '', '2020-08-20 15:49:47', '2020-08-20 15:49:47'),
(4, 'guest one', 2, 'guest1@gmail.com', '$2b$10$ypDF2cIn2D2g24iQcVzcieIGg9/X.4Vt2Mq77lJlrSf/W4LfFgBLe', '123456789654', 'Jl.jalanan', '', '2020-08-20 15:50:45', '2020-08-20 15:50:45'),
(6, 'sabtu', 2, 'sabtu@gmail.com', '$2b$10$5IYOknp5dniMjNTfOZREr.W.A/9tnQM9gP/QRF1zkRR9r7mQZOqSe', '082343456785', 'jl.sabtu', '', '2020-08-22 04:49:51', '2020-08-24 13:21:45'),
(10, 'Senin', 2, 'senin@gmail.com', '$2b$10$69U9TVn53h72eAw76yhJee692J1Cii0FxkXs8vlFTxVQOUU0y.ry6', '082332345678', 'Jl.Senin', NULL, '2020-08-24 17:43:35', '2020-08-24 17:43:35'),
(15, 'fachri zain', 2, 'zainfachri23@gmail.com', '$2b$10$Q5grDfFJlkCfPzEuedpuBu4jhzg7FXIlJTGC6pjRw..S1j8xzAKKa', '082164894643', 'Jl.Cemara', NULL, '2020-08-27 03:54:38', '2020-08-27 03:54:38');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tripId` (`tripId`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `trips`
--
ALTER TABLE `trips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `countryId` (`countryId`);

--
-- Indeks untuk tabel `userroles`
--
ALTER TABLE `userroles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT untuk tabel `trips`
--
ALTER TABLE `trips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `userroles`
--
ALTER TABLE `userroles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`tripId`) REFERENCES `trips` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `trips`
--
ALTER TABLE `trips`
  ADD CONSTRAINT `trips_ibfk_1` FOREIGN KEY (`countryId`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
