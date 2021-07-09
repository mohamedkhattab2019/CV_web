
$(document).ready(function () {
    $(window).scroll(function () {
        var hT = $('#about').offset().top,
            wS = $(this).scrollTop();
        if (wS == hT) {
            $('.faddedLeft').animate({opacity: '1' }, 700);
            $('.faddedRight').animate({ opacity: '1' }, 700);
            $('#navBrand').html('<a href="#about" class="navbar-brand">About</a>')
        }
    })
    $(window).scroll(function () {
        var hT = $('#skills').offset().top,
            wS = $(this).scrollTop();
        if (wS == hT) {
            // $('.animate').animate({  opacity: '1' }, 1000);

            // $('.faddedRight').animate({ right: '0px', opacity: '1' }, 700);
            $('#navBrand').html('<a href="#about" class="navbar-brand">Skills</a>')
        }
    })


    //---------------------SkillsChart -------------------------------//
    var data = {
        labels: ['python', 'Model-based-control','Database','Embeded-sys'],
        datasets: [{
            data: [40,30,10,20],
            backgroundColor: ['#dc3545','#007bff','#6f42c1','#ffc107'],
            borderWidth:1,
            color:'#ffffff'
        }],
    }
    var options = {
        legend:{
            labels:{
                fontColor:'white'
            },
        },
        cutoutPercentage: 50,
    }

    var skillChart = new Chart(document.querySelector('.chart'), {
        type: 'pie',
        data: data,
        options: options
    })



    var skills = [
        { name: 'Python', value: 90, color: '#dc3545', animDir: "animate" },
        { name: 'ROS', value: 50, color: '#dc3545', animDir: "animate" },
        { name: 'SQL Server', value: 75, color: '#e83e8c', animDir: "animate" },
        { name: 'C', value: 60, color: '#dc3545', animDir: "animate" },
        { name: 'EmbededSystem', value: 60, color: '#dc3545', animDir: "animate" },
        { name: 'Model Based Control', value: 60, color: '#dc3545', animDir: "animate" },
        { name: 'PHP', value: 60, color: '#17a2b8', animDir: "animate" },
        { name: 'HTML', value: 90, color: '#dc3545', animDir: "animate" },
        { name: 'CSS', value: 85, color: '#28a745', animDir: "animate" },
        { name: 'JavaScript', value: 85, color: '#ffc107', animDir: "animate" },
        { name: 'Jquery', value: 80, color: '#007bff', animDir: "animate" },
        { name: 'Bootstrap', value: 90, color: '#6f42c1', animDir: "animate" },
      
    ]
    //---------------------------Skills---------------------------//
    for (skill in skills) {
        $('.skillsDiv').append('<div class="col-4  ' + skills[skill]['animDir'] + '" ><canvas class="chartSkill"></canvas><h5 class="mt-1" style="text-align: center;">' + skills[skill]['name'] + '</h5></div>')
        var dataSkills = {
            labels: [skills[skill]['name'], ' in progress'],
            datasets: [{
                data: [skills[skill]['value'], 100 - skills[skill]['value']],
                backgroundColor: [skills[skill]['color']],
                borderWidth:1
            }],
        }
        var optionsSkills = {
            legend: {
                display: false,
            },
            cutoutPercentage: 70,
        }

        var skillsChart = new Chart(document.querySelectorAll('.chartSkill')[skill], {
            type: 'pie',
            data: dataSkills,
            options: optionsSkills
        })

    }




})


