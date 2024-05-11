
function clickMe(event){
    event.preventDefault();
console.log("Button clicked");

       var fName = document.getElementById("fname").value;
        var lName = document.getElementById("last_name").value;
        var email = document.getElementById("email").value;
        var phone = document.querySelector(".phone_class").value;
        var address = document.querySelector(".address_class").value;
        var linkdin = document.getElementById("linkdin").value;
        var github = document.getElementById("github").value;
        var summary = document.getElementById("in_summary").value;
        
  
        document.getElementById("uName").textContent = fName + " " + lName;
        document.getElementById("uEmail").innerHTML = email
        document.getElementById("phone_num").innerHTML = phone
        document.getElementById("uAddress").innerHTML = address
        document.getElementById("uLinkdin").innerHTML = linkdin
        document.getElementById("uGithub").innerHTML = github
        document.getElementById("uSummary").innerHTML = summary


        var universityName = document.getElementById("school").value;
        var startMonth = document.getElementById("startMonth").value;
        var startYear = document.getElementById("startYear").value;
        var endMonth = document.getElementById("endMonth").value;
        var endYear = document.getElementById("endYear").value;
        var degree = document.getElementById("degree").value;

        // Set the values to the paragraph elements
        document.getElementById("outUniversity").textContent = universityName;
        document.getElementById("outDate").textContent = startYear + "-" + endYear;
        document.getElementById("outDegree").textContent = degree;


        // soft skill

        var softSkill1 = document.getElementById("softSkill1").value;
        var softSkill2 = document.getElementById("softSkill2").value;
        var softSkill3 = document.getElementById("softSkill3").value;
        var softSkill4 = document.getElementById("softSkill4").value;
        var softSkill5 = document.getElementById("softSkill5").value;
        var softSkill6 = document.getElementById("softSkill6").value;

        // Create an array of soft skills
        var softSkills = [softSkill1, softSkill2, softSkill3, softSkill4, softSkill5, softSkill6];

        // Get the ul element
        var softSkillsList = document.getElementById("softSkillsList");

        // Clear existing list items
        softSkillsList.innerHTML = "";

        // Create li elements and append to the ul
        softSkills.forEach(function(skill) {
            var li = document.createElement("li");
            li.textContent = skill;
            softSkillsList.appendChild(li);
        });


        // Achivements 
        var achiv1 = document.getElementById("achiv1").value;
        var achiv2 = document.getElementById("achiv2").value;
        var achiv3 = document.getElementById("achiv3").value;
        var achiv4 = document.getElementById("achiv4").value;

        // Create an array of achievements
        var achievements = [achiv1, achiv2, achiv3, achiv4];

        // Get the ul element
        var achiveList = document.getElementById("achiveList");

        // Clear existing list items
        achiveList.innerHTML = "";

        // Create li elements and append to the ul
        achievements.forEach(function(achievement) {
            var li = document.createElement("li");
            li.textContent = achievement;
            achiveList.appendChild(li);
        });

        // hobby
         // Achivements 
         var hobbi1 = document.getElementById("hobbi1").value;
         var hobbi2 = document.getElementById("hobbi2").value;
         var hobbi3 = document.getElementById("hobbi3").value;
         var hobbi4 = document.getElementById("hobbi4").value;
 
         // Create an array of achievements
         var hobby = [hobbi1, hobbi2, hobbi3, hobbi4];
 
         // Get the ul element
         var hobbyList = document.getElementById("hobbyList");
 
         // Clear existing list items
         hobbyList.innerHTML = "";
 
         // Create li elements and append to the ul
         hobby.forEach(function(hobi) {
             var li = document.createElement("li");
             li.textContent = hobi;
             hobbyList.appendChild(li);
         });

        //  language
        var lang1 = document.getElementById("lang1").value;
        var lang2 = document.getElementById("lang2").value;
        var lang3 = document.getElementById("lang3").value;
        

        // Create an array of achievements
        var lang = [lang1, lang2, lang3];

        // Get the ul element
        var langList = document.getElementById("langList");

        // Clear existing list items
        langList.innerHTML = "";

        // Create li elements and append to the ul
        lang.forEach(function(langu) {
            var li = document.createElement("li");
            li.textContent = langu;
            langList.appendChild(li);
        });

        // tech skills
        var techSkill1 = document.getElementById("techSkill1").value;
        var techSkill2 = document.getElementById("techSkill2").value;
        var techSkill3 = document.getElementById("techSkill3").value;
        var techSkill4 = document.getElementById("techSkill4").value;
        var techSkill5 = document.getElementById("techSkill5").value;
        var techSkill6 = document.getElementById("techSkill6").value;
        

        // Create an array of achievements
        var tech = [techSkill1, techSkill2, techSkill3, techSkill4, techSkill5, techSkill6];

        // Get the ul element
        var techList = document.getElementById("techList");

        // Clear existing list items
        techList.innerHTML = "";

        // Create li elements and append to the ul
        tech.forEach(function(techl) {
            var li = document.createElement("li");
            li.textContent = techl;
            techList.appendChild(li);
        });
        
        // internship
        var inProfile = document.getElementById("in_profile").value;
         document.getElementById("uProfile").innerHTML = inProfile;
        var inDetails = document.getElementById("intern_details").value;
         document.getElementById("uInternDetails").innerHTML = inDetails;
         
         //  project 
         var pDetail = document.getElementById("projectDetails").value;
          document.getElementById("uProjectDetails").innerHTML = pDetail;

//           work experince
         var work = document.getElementById("workExp").value;
          document.getElementById("uworkExp").innerHTML = work;

        //   certification

        var certificate1 = document.getElementById("certificate1").value;
        var certificate2 = document.getElementById("certificate2").value;
        var certificate3 = document.getElementById("certificate3").value;
        var certificate4 = document.getElementById("certificate4").value;
        var certificate5 = document.getElementById("certificate5").value;
       

        // Create an array of achievements
        var certi = [certificate1, certificate2, certificate3, certificate4, certificate5,];

        // Get the ul element
        var certiList = document.getElementById("certiList");

        // Clear existing list items
        certiList.innerHTML = "";

        // Create li elements and append to the ul
        certi.forEach(function(cet) {
            var li = document.createElement("li");
            li.textContent = cet;
            certiList.appendChild(li);
        });
}