const slide=document.querySelectorAll('.slides div');
      let slideIdex=0;
      let intervalId=null;

      document.addEventListener('DOMContentLoaded',initialize);
      


      function initialize(){
        if(slide.length>0){
      slide[slideIdex].classList.add('displaySlide');
      intervalId=setInterval(next,10000);
        }
      }

      function slideShow(index){
        if(index>=slide.length){
          slideIdex=0;
        }else if(index<0){
          slideIdex=slide.length-1;
        }
      slide.forEach(slide =>{
        slide.classList.remove('displaySlide');
      });
      slide[slideIdex].classList.add('displaySlide');
      }

      function next(){
        slideIdex++;
        slideShow(slideIdex);
      }
      function renderForm(){
        const opinion = document.querySelector('.opinion');
        let opinionHtml=`
        <form>
          <label>
            Type:
          </label>
          <input placeholder="What is your concern?" list="opinions" id="opinion" name="opinion">
          <datalist id="opinions">
          <option value="News">News</option>
          <option value="Events">Events</option>
          <option value="Website">Website</option>
          </datalist>
          <br>
          <br>
          <label>Email:</label>
          <input type="email">
          <br>
          <br>
          <label>Description</label>
          <textarea>
            Give your Ideas.
          </textarea>
          <br>
          <br>
          <input type="submit" class="learn-button">
        </form>
      `;
      opinion.innerHTML=opinionHtml;

      }

      document.addEventListener("DOMContentLoaded", function () {
        const calendar = document.getElementById("calendar");
        const monthYear = document.getElementById("month-year");
        const date =document.getElementById("date");
        const prevBtn = document.getElementById("prev");
        const nextBtn = document.getElementById("next");
        let currentDate = new Date();
        let events = {
          "2025-3-18": "GOOD FRI",
          "2025-4-15": "Project deadline",
          "2025-3-28": "Team outing",
          "2025-3-20": "EASTER SUN",
          "2025-3-21": "EASTER MON"
      };
    
        function renderCalendar() {
            const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            const today = new Date();
            calendar.innerHTML = "";
            monthYear.textContent = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric",});
            date.textContent=today.toDateString();

            for (let i = 1; i <= lastDay.getDate(); i++) {
                let day = document.createElement("div");
                day.classList.add("day");
                day.textContent = i;

                let eventText = document.createElement("span"); // Create a span element for event text
                eventText.classList.add("event-text");

                let eventKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${i}`;
            if (events[eventKey]) {
                eventText.textContent = events[eventKey]; // Display event text
            }

                day.appendChild(eventText);
                

                
                if (i === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
                    day.classList.add("today");
                }
                
                
                
                calendar.appendChild(day);
            }
        }
    
        prevBtn.addEventListener("click", function () {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });
        
        nextBtn.addEventListener("click", function () {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
        
        renderCalendar();
    });
