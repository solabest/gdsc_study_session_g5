
        // Initial counter value
        let counterValue = 0;

        // Function to increment the counter
        function increment() {
            counterValue++;
            updateCounter();
        }

        // Function to decrement the counter
        function decrement() {
            counterValue--;
            updateCounter();
        }

        // Function to update the counter value in the HTML
        function updateCounter() {
            document.getElementById('counter').innerText = counterValue;
        }

