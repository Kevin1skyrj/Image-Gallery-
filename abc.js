
    function changeTheme() {
      document.body.style.backgroundColor = getRandomColor();
      alert("Changed theme successfully");
    }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function updateClock() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const timeFormat = hours >= 12 ? 'PM' : 'AM';

      const formattedHours = hours % 12 || 12;

      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      const clockElement = document.getElementById('clock');
      clockElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${timeFormat}`;

      setTimeout(updateClock, 1000);
    }

    updateClock(); // Initial call to display clock
 
