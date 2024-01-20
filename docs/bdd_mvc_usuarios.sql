-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para mvc_usuarios
CREATE DATABASE IF NOT EXISTS `mvc_usuarios` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `mvc_usuarios`;

-- Volcando estructura para tabla mvc_usuarios.employees
CREATE TABLE IF NOT EXISTS `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla mvc_usuarios.employees: ~2 rows (aproximadamente)
INSERT INTO `employees` (`id`, `firstname`, `lastname`) VALUES
	(2, 'Washington', 'Ledesma'),
	(3, 'Samuel', 'Ledesma');

-- Volcando estructura para tabla mvc_usuarios.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `idusuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombreusuario` varchar(50) DEFAULT NULL,
  `apellidousuario` varchar(50) DEFAULT NULL,
  `cedulausuario` varchar(10) DEFAULT NULL,
  `telefonousuario` varchar(30) DEFAULT NULL,
  `direccionusuario` varchar(80) DEFAULT NULL,
  `correousuario` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla mvc_usuarios.usuario: ~1 rows (aproximadamente)
INSERT INTO `usuario` (`idusuario`, `nombreusuario`, `apellidousuario`, `cedulausuario`, `telefonousuario`, `direccionusuario`, `correousuario`) VALUES
	(24, 'Washington', 'Ledesma Merchán', '1723391031', '+593959994666', 'Sto Domingo', 'wsledesma@espe.edu.ec');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
