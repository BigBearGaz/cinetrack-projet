USE cinetrack_db;

-- Insertion des catégories
INSERT INTO categories (name) VALUES
('Action'),
('Comédie'),
('Drame'),
('Science-Fiction'),
('Horreur'),
('Thriller'),
('Animation'),
('Documentaire');

-- Insertion de films
INSERT INTO films (title, release_year, duration, poster_url, synopsis, director, category_id) VALUES
('Inception', 2010, 148, 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg', 'Un voleur qui s\'infiltre dans les rêves des gens se voit offrir une chance de retrouver sa vie d\'avant.', 'Christopher Nolan', 4),
('The Dark Knight', 2008, 152, 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', 'Batman affronte le Joker, un criminel anarchiste qui veut plonger Gotham dans le chaos.', 'Christopher Nolan', 1),
('Parasite', 2019, 132, 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', 'Une famille pauvre s\'infiltre dans la vie d\'une famille riche avec des conséquences inattendues.', 'Bong Joon-ho', 3),
('Interstellar', 2014, 169, 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', 'Un groupe d\'explorateurs voyage à travers un trou de ver dans l\'espace pour assurer la survie de l\'humanité.', 'Christopher Nolan', 4),
('The Shawshank Redemption', 1994, 142, 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', 'Deux hommes emprisonnés se lient d\'amitié au fil des années.', 'Frank Darabont', 3),
('Pulp Fiction', 1994, 154, 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg', 'Les vies de deux tueurs à gages, un boxeur et un couple de braqueurs s\'entremêlent.', 'Quentin Tarantino', 6),
('Forrest Gump', 1994, 142, 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg', 'L\'histoire de Forrest Gump, un homme simple qui accomplit des choses extraordinaires.', 'Robert Zemeckis', 3),
('The Matrix', 1999, 136, 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 'Un hacker découvre la vérité sur sa réalité et son rôle dans la guerre contre ses contrôleurs.', 'Lana Wachowski, Lilly Wachowski', 4),
('Goodfellas', 1990, 146, 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg', 'L\'ascension et la chute d\'un gangster de la mafia dans le New York des années 50-80.', 'Martin Scorsese', 3),
('The Silence of the Lambs', 1991, 118, 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg', 'Une jeune agent du FBI cherche l\'aide d\'un cannibale emprisonné pour capturer un tueur en série.', 'Jonathan Demme', 6),
('Fight Club', 1999, 139, 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg', 'Un employé de bureau insomniaque et un vendeur de savon forment un club de combat clandestin.', 'David Fincher', 3),
('The Godfather', 1972, 175, 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', 'Le patriarche vieillissant d\'une dynastie criminelle transfère le contrôle de son empire à son fils réticent.', 'Francis Ford Coppola', 3),
('Spirited Away', 2001, 125, 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg', 'Une jeune fille entre dans un monde d\'esprits et doit travailler dans un bain pour sauver ses parents.', 'Hayao Miyazaki', 7),
('Gladiator', 2000, 155, 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg', 'Un général romain trahi devient gladiateur et cherche à se venger de l\'empereur corrompu.', 'Ridley Scott', 1),
('The Departed', 2006, 151, 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg', 'Un policier infiltré et un criminel infiltré dans la police tentent de s\'identifier mutuellement.', 'Martin Scorsese', 6),
('Whiplash', 2014, 106, 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg', 'Un jeune batteur ambitieux est poussé à ses limites par un professeur de musique impitoyable.', 'Damien Chazelle', 3),
('The Grand Budapest Hotel', 2014, 99, 'https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg', 'Les aventures de Gustave H, concierge légendaire d\'un célèbre hôtel européen.', 'Wes Anderson', 2),
('Mad Max: Fury Road', 2015, 120, 'https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg', 'Dans un désert post-apocalyptique, Max aide un groupe de femmes à échapper à un tyran.', 'George Miller', 1),
('Get Out', 2017, 104, 'https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg', 'Un jeune homme découvre un horrible secret quand il rend visite à la famille de sa petite amie.', 'Jordan Peele', 5),
('Joker', 2019, 122, 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg', 'Un humoriste raté sombre lentement dans la folie et devient le Joker.', 'Todd Phillips', 3);