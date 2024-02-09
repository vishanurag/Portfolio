-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2023 at 03:34 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `temp`
--

-- --------------------------------------------------------

--
-- Table structure for table `anurag_projects_list`
--

CREATE TABLE `anurag_projects_list` (
  `title` varchar(255) NOT NULL,
  `live_link` varchar(500) DEFAULT NULL,
  `github_repo` varchar(255) DEFAULT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `creation_date` date DEFAULT NULL,
  `tech_used` varchar(200) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `anurag_projects_list`
--

INSERT INTO `anurag_projects_list` (`title`, `live_link`, `github_repo`, `Description`, `creation_date`, `tech_used`) VALUES
('Portfolio V2', 'https://vcma.rf.gd/Portfolio/', 'https://github.com/vishanurag/Portfolio', 'I have made my Personal Portfolio Web-Page. In this project I have learned so many new stuff. This project is much more structured than my earlier projects', '2023-03-08', 'HTML CSS (Advanced) Javascript(Intermediate) Bootstrap(Intermediate)'),
('Basic Calculator', 'https://www.ashstudy.rf.gd/anurag/projects/basic-calculator/', 'https://github.com/vishanurag/basicCalculator', 'It was my first Calculator Web-Page. It is capable of doing Basic Mathematical Calculations. I made this project just after my third sem exams back in Jan 2023.', '2023-01-26', ' HTML CSS (Intermediate) Javascript(Basic)'),
('IACA Website Clone', 'https://www.ashstudy.rf.gd/iaca/', '', 'It was my first Vast Project. I have made this website with my college friends (Himanshu & Sumit).', '2023-02-12', ' HTML CSS (Intermediate) PHP(Basic) Bootstrap(Intermediate)'),
('Portfolio V1', 'https://vcma.rf.gd/', '', 'It was my first Personal Portfolio Web-Page. In this project I have learned so many new stuff. I made this project during my third sem exams back in Dec 2022.', '2022-12-25', 'HTML CSS (Intermediate) Javascript(Basic)'),
('ASH Study Website', 'https://ashstudy.rf.gd/', 'https://github.com/vishanurag/ashStudy', 'This is the updated version of ASH Study Website. I have made it much more better ', '2023-04-22', 'HTML CSS (Advanced) Javascript(Intermediate) Bootstrap(Intermediate) PHP(Basic)'),
('citiWebCast Weather', 'https://citiwebcast.web.app/', 'https://github.com/vishanurag/citiWebCast', 'This webapp provides the weather details of cities accross the globe ? using APIs.', '2023-06-29', 'HTML CSS (Advanced) Javascript(Intermediate) Bootstrap(Intermediate) APIs'),
('ASH Study Old', 'https://ashstudy.000webhostapp.com/', '', 'It was my first Web-Page that I made for some study purpose with my friends. This project is niether that much responsive nor amazing. But I have learned so many things from this project.', '2022-11-25', 'HTML CSS (Intermediate)  Bootstrap(Intermediate)');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anurag_projects_list`
--
ALTER TABLE `anurag_projects_list`
  ADD PRIMARY KEY (`title`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
