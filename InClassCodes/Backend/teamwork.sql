SELECT Name trackName, Composer FROM Track;


SELECT * FROM Track;


SELECT DISTINCT Name, Composer FROM Track;


SELECT DISTINCT AlbumId, MediaTypeId FROM Track;


SELECT TrackId, Name FROM Track WHERE Composer='Jorge Be';


SELECT * FROM Invoice WHERE total>25;


SELECT * FROM Invoice WHERE total<15 LIMIT 5;


SELECT * FROM Invoice WHERE total>10 ORDER BY total DESC LIMIT 2;


SELECT * FROM Invoice WHERE BillingCountry<>'Canada' ORDER by total LIMIT 10;


SELECT InvoiceId, CustomerId, total FROM Invoice ORDER by CustomerId, total DESC;


SELECT Name FROM Track WHERE Name like 'B%s';


SELECT max(InvoiceDate) NewestDate FROM Invoice WHERE InvoiceDate BETWEEN '2008/01/01' AND '2011/12/31';


SELECT FirstName, LastName FROM Customer WHERE Country IN ('Norway', 'Belgium');


SELECT Name FROM Track WHERE Composer LIKE '%Zappa%';



SELECT 
    (SELECT COUNT(*) FROM Track) AS TrackCount,
    (SELECT COUNT(*) FROM Invoice) AS InvoiceCount;
	
	
	
SELECT count( DISTINCT composer) ComposerCount FROM Track;
SELECT DISTINCT Composer FROM Track;



SELECT AlbumId, count(TrackId) AS NumberOfTracks FROM Track GROUP BY AlbumId ORDER by NumberOfTracks DESC;



SELECT 
    (SELECT min(Milliseconds) FROM Track) AS minDuration,
    (SELECT max(Milliseconds) FROM Track) AS maxDuration;
		
SELECT
    Name AS ShortestTrack,
    MIN(Milliseconds) AS ShortestDurationMilliseconds,
    Name AS LongestTrack,
    MAX(Milliseconds) AS LongestDurationMilliseconds
FROM Track;

SELECT
    MIN(CASE WHEN Milliseconds = (SELECT MIN(Milliseconds) FROM Track) THEN Name END) AS ShortestTrack,
    MIN(Milliseconds) AS ShortestDurationMilliseconds,
    MAX(CASE WHEN Milliseconds = (SELECT MAX(Milliseconds) FROM Track) THEN Name END) AS LongestTrack,
    MAX(Milliseconds) AS LongestDurationMilliseconds
FROM Track;


SELECT Name AS ShortestTrack, Milliseconds AS DurationMilliseconds
FROM Track
ORDER BY DurationMilliseconds ASC
LIMIT 1;

SELECT Name AS LongestTrack, Milliseconds AS DurationMilliseconds
FROM Track
ORDER BY DurationMilliseconds DESC LIMIT 1;


SELECT
    MIN(CASE WHEN Milliseconds = ShortestDurationMilliseconds THEN Name END) AS ShortestTrack,
    ShortestDurationMilliseconds,
    MAX(CASE WHEN Milliseconds = LongestDurationMilliseconds THEN Name END) AS LongestTrack,
    LongestDurationMilliseconds
FROM (
    SELECT
        Name,
        Milliseconds,
        MIN(Milliseconds) OVER () AS ShortestDurationMilliseconds,
        MAX(Milliseconds) OVER () AS LongestDurationMilliseconds
    FROM Track
) AS Subquery;




SELECT avg(Milliseconds) FROM Track;
SELECT * from Track WHERE Milliseconds < (SELECT avg(Milliseconds) FROM Track) ORDER by Milliseconds DESC;



SELECT Composer, count(*) numberOfTracks FROM Track GROUP by Composer;



SELECT t.Name trackName, g.Name genreName FROM Track t JOIN Genre g on t.GenreId=g.GenreId;



SELECT a.Name artistName, al.Title albumTitle FROM Album al JOIN Artist a on al.ArtistId=a.ArtistId ORDER by artistName;

SELECT 
    a.Name AS artistName,
    GROUP_CONCAT(al.Title, ', ') AS albumTitles,
    COUNT(*) AS albumCount
FROM Album al
JOIN Artist a ON al.ArtistId = a.ArtistId
GROUP BY a.Name
ORDER BY a.Name;



SELECT t.AlbumId, a.Title, min(t.Milliseconds) minDuration FROM Track t JOIN Album a on t.AlbumId=a.AlbumId GROUP by t.AlbumId ORDER by minDuration DESC;



SELECT a.Title albumTitle, round(sum(t.Milliseconds) / 1000.0 / 60.0,2) AS totalAlbumDuration FROM Track t JOIN Album a on t.AlbumId=a.AlbumId GROUP by t.AlbumId  HAVING totalAlbumDuration>60 ORDER by totalAlbumDuration DESC;  



SELECT t.TrackId, t.Name, a.* FROM Track t JOIN Album a on t.AlbumId=a.AlbumId WHERE a.Title in ( 'Prenda Minha' , 'Heart of the Night',  'Out Of Exile' );







