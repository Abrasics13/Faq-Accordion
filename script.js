const svg_one = document.getElementById("one");
      const svg_two = document.getElementById("two");
      const svg_three = document.getElementById("three");
      const svg_four = document.getElementById("four");
    
      const para_one = document.getElementById("para1");
      const para_two = document.getElementById("para2");
      const para_three = document.getElementById("para3");
      const para_four = document.getElementById("para4");
      
      svg_one.addEventListener("click", myFunction);
      svg_two.addEventListener("click", secondFunction);
      svg_three.addEventListener("click", thirdFunction);
      svg_four.addEventListener("click", fouthFunction);

      let clickCount = 0;
      function myFunction() {
        clickCount++;
        if (clickCount % 2 === 1) {
          para_one.style.color = "hsl(292, 16%, 49%)";
          para_one.style.display = "block";
        }
        else {
          para_one.style.display = "none";
        }
      }

        function secondFunction() {
          clickCount++;
          if (clickCount % 2 === 1) {
            para_two.style.color = "hsl(292, 16%, 49%)";
            para_two.style.display = "block";
          }
          else {
            para_two.style.display = "none";
          }
        }

        function thirdFunction() {
          clickCount++;
          if (clickCount % 2 === 1) {
            para_two.style.color = "hsl(292, 16%, 49%)";
            para_three.style.display = "block";
          }
          else {
            para_three.style.display = "none";
          }
        }

        function fouthFunction() {
          clickCount++;
          if (clickCount % 2 === 1) {
            para_three.style.color = "hsl(292, 16%, 49%)";
            para_four.style.display = "block";
          }
          else {
            para_four.style.display = "none";
          }
        }
        