const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        function removePrefix(name) {
            // Remove "A", "An", or "The" from the start of the name
            if (name.startsWith("A ") || name.startsWith("An ") || name.startsWith("The ")) {
                return name.split(" ").slice(1).join(" ");
            }
            return name;
        }

        // Sort the bands by their names without prefixes
        const sortedBands = bands.slice().sort(function(a, b) {
            const nameA = removePrefix(a).toLowerCase();
            const nameB = removePrefix(b).toLowerCase();
            return nameA.localeCompare(nameB);
        });

        const bandList = document.getElementById('band');

        // Add each sorted band to the list
        for (let i = 0; i < sortedBands.length; i++) {
            const li = document.createElement('li');
            li.textContent = sortedBands[i];
            bandList.appendChild(li);
        }