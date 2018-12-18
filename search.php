<?php
require_once 'dbconfig.php';

try {
  $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
  echo "Connected to $host successfully.";
} catch (PDOException $pe) {
  die("Could not connect to database $dbname: " . $pe->GetMessage());
}

$sql = 'SELECT * FROM entries
  WHERE mdc LIKE ?';

$query = $conn->prepare($sql);
$query->execute(['R4']);
$query->setFetchMode(PDO::FETCH_ASSOC);

?>
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8>
<title>Test search result</title>
</head>
<body>
<h1>Hieroglyphicus</h1>
<table>
  <tr>
    <th>MdC</th>
    <th>transliteration</th>
    <th>translation</th>
  </tr>
  <?php while ($entry = $query->fetch()): ?>
  <tr>
    <td><?php echo htmlspecialchars($entry['mdc']); ?></td>
    <td><?php echo htmlspecialchars($entry['transliteration']); ?></td>
    <td><?php echo htmlspecialchars($entry['english']); ?></td>
  </tr>
  <?php endwhile; ?>
</table>
</body>
</html>
