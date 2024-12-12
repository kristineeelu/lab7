<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Schimbare Culoare</title>
  <style>
    body {
      text-align: center;
      font-family: Arial, sans-serif;
    }
    button {
      margin-top: 50px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Apasă butonul pentru a schimba culoarea fundalului!</h1>
  <button id="colorButton">Schimbă Culoarea</button>

  <script>
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1"];

    document.getElementById("colorButton").addEventListener("click", () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    });
  </script>
</body>
</html>
