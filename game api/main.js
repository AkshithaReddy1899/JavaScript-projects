let url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json";


let sidebar = document.getElementById("sidebar");


fetch(url)

.then((response) => response.json())

.then((data) => {
    console.log(data);

    data.forEach(item => {

        let container = document.createElement('div');

        container.className = 'container';

        container.innerHTML = `Title: ${item.title}<br><br>  Platform: ${item.platform}<br><br>Score: ${item.score}<br><br> Genre: ${item.genre}<br><br>Editors_choice: ${item.editors_choice}`

        document.getElementById('app').appendChild(container)
    })

    document.getElementById('submit').addEventListener('click', () => {

        sidebar.classList.add("invisible");
        sidebar.classList.remove("visible");


        if (editor.value == 'Y') {

            document.getElementById('app').style.display = 'none';
            document.getElementById('app-filter-n').style.display = 'none';
            document.getElementById('app-filter-y').style.display = 'flex';
            document.getElementById('app-clear').style.display = 'none';

            let editorY = data.filter(element => element.editors_choice == 'Y')

            console.log(editorY)

            editorY.forEach(item => {
                let container = document.createElement('div');

                container.className = 'container';

                container.innerHTML = `Title: ${item.title}<br><br>  Platform: ${item.platform}<br><br>Score: ${item.score}<br><br> Genre: ${item.genre}<br><br>Editors_choice: ${item.editors_choice}`

                document.getElementById('app-filter-y').appendChild(container)
            })
        } else if (editor.value == 'N') {

            document.getElementById('app').style.display = 'none';
            document.getElementById('app-filter-y').style.display = 'none';
            document.getElementById('app-filter-n').style.display = 'flex';
            document.getElementById('app-clear').style.display = 'none';

            let editorN = data.filter(element => element.editors_choice == 'N')

            console.log(editorN)

            editorN.forEach(item => {
                let container = document.createElement('div');

                container.className = 'container';

                container.innerHTML = `Title: ${item.title}<br><br>  Platform: ${item.platform}<br><br>Score: ${item.score}<br><br> Genre: ${item.genre}<br><br>Editors_choice: ${item.editors_choice}`

                document.getElementById('app-filter-n').appendChild(container)
            })
        }
    })

    document.getElementById('clear').addEventListener('click', () => {

        if (editor.value != " ") {

            document.getElementById('app-filter-y').style.display = 'none';
            document.getElementById('app-filter-n').style.display = 'none';
            document.getElementById('app').style.display = 'none';
            document.getElementById('app-clear').style.display = 'flex';

            sidebar.classList.add("invisible");
            sidebar.classList.remove("visible");

            console.log(data)

            data.forEach(item => {

                let container = document.createElement('div');

                container.className = 'container';

                container.innerHTML = `Title: ${item.title}<br><br>  Platform: ${item.platform}<br><br>Score: ${item.score}<br><br> Genre: ${item.genre}<br><br>Editors_choice: ${item.editors_choice}`

                document.getElementById('app-clear').appendChild(container)
            })
        }
    })

})



//filters

document.getElementById("side-btn").addEventListener("click", () => {

    if (sidebar.classList.contains("invisible")) {
        sidebar.classList.add("visible");
        sidebar.classList.remove("invisible");
    } else if (sidebar.classList.contains("visible")) {
        sidebar.classList.add("invisible");
        sidebar.classList.remove("visible");
    }
})