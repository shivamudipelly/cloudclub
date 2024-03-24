const facultyCoordinator = document.querySelector('.faculty');
    const coreTeam = document.querySelector('.core-team');
    const juniorBody = document.querySelector('.junior-body');

    const seniorBody = [
        { name: "Vuthuri Rahul", role: "President", imagePath: "./images/coreTeam/rahul.jpg" },
        { name: "Yashwanth Jakkula", role: "Website Coordinator", imagePath: "./images/coreTeam/yash.jpg" },
        { name: "Akhileswara Reddy", role: "Technical Head", imagePath: "./images/coreTeam/akhil.jpg" },
        { name: "Venkata Ramana", role: "Social Media Head", imagePath: "./images/coreTeam/venkata.jpg" },
        { name: "Kalanjan", role: "Organizing Lead", imagePath: "./images/coreTeam/kalanjan.jpg" },
        { name: "Tahura Afsheen", role: "Vice President (Education and Training)", imagePath: "./images/coreTeam/afsheen.jpg" },
        { name: "Kemidi Srija", role: "Vice President (Membership)", imagePath: "./images/coreTeam/srija.jpg" },
        { name: "Barmavath Srikanth", role: "Vice President (Public Relations)", imagePath: "./images/coreTeam/srikanth.jpg" },
        { name: "Sheri Harini Reddy", role: "Secretary", imagePath: "./images/coreTeam/harini.jpg" },
        { name: "Madireddy Sai Manasa", role: "Treasurer", imagePath: "./images/coreTeam/manasa.jpg" },
        { name: "Sadhvi Annajigari", role: "Event Hospitality", imagePath: "./images/coreTeam/sadhvi.jpg" },
        { name: "L. Dheeraj", role: "Mobile App", imagePath: "./images/coreTeam/dheeraj.jpg" },
        { name: "Sadashiv Koride", role: "Marketing Manager", imagePath: "./images/coreTeam/shiv.jpg" },
        { name: "Vadluri Akshitha Shree", role: "Content Writer", imagePath: "./images/coreTeam/akshitha.jpg" },
        { name: "Shiva Koride", role: "Designer", imagePath: "./images/coreTeam/shiva.jpg" }
      ];
      
    function cards(cardData){
    const cards = cardData.map( ele =>`
                <div class="card">
                    <div class="img">
                        <img src="${ele.imagePath}" alt="Image">
                    </div>
                    <div class="info">
                    <p> ${ele.name}</p>
                    <p> ${ele.role}</p>
                    </div>
                </div>`).join('');
        return cards;
}
    // facultyCoordinator.innerHTML = cards;
    coreTeam.innerHTML = cards(seniorBody);
    // juniorBody.innerHTML = cards;
    
