 let totalNumber = document.getElementById('total-number');
 
 let interviewNumber = document.getElementById('interview-number');
 let interviewList = [] ;

 let rejectedNumber =  document.getElementById('rejected-number');
 let rejectedList = [];

 let currentStatus = 'all-button';

 let jobnumber = document.getElementById('number-of-jobs'); 

 const allCards = document.getElementById('all-cards');
 
 const mainContainer = document.querySelector('main');
 
 const allButton = document.getElementById('all-button');
 const interviewButton = document.getElementById('interview-button');
 const rejectedButton = document.getElementById('rejected-button');
 
 const filteredSection = document.getElementById('filtered-section');
 

 function calculateNumber(){



    totalNumber.innerText = allCards.children.length;
    jobnumber.innerText = allCards.children.length + ' jobs';

    interviewNumber.innerText = interviewList.length;

    rejectedNumber.innerText = rejectedList.length;
 }

 calculateNumber();
 

 function toggleStyle(id){

    allButton.classList.remove('btn-info','text-white');
    interviewButton.classList.remove('btn-info','text-white');
    rejectedButton.classList.remove('btn-info','text-white');

    allButton.classList.add('btn');
    interviewButton.classList.add('btn');
    rejectedButton.classList.add('btn');

    const selectedButton = document.getElementById(id);
    selectedButton.classList.add('btn-info','text-white');

    currentStatus = id;

    console.log(id);
    

    if(id == 'interview-button'){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    }

    else if(id == 'all-button'){
         allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
    else if(id == 'rejected-button'){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }

 }


 mainContainer.addEventListener('click', function(event){

    if(event.target.classList.contains('interview-button')){

    const parentNode = event.target.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobPost = parentNode.querySelector('.job-post').innerText;
    const jobDetails = parentNode.querySelector('.job-details').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

     parentNode.querySelector('.status').innerText = 'Interview';
    
    const cardInfo = {
        companyName,
        jobPost,
        jobDetails,
        status:'Interview',
        notes
    }
    
   const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);


   if(!companyExist){
      interviewList.push(cardInfo);
   }

   rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);
   
   if(currentStatus == 'interview-button'){
     renderInterview();
   }
   else if(currentStatus == 'rejected-button'){
        renderRejected();
   }

   calculateNumber()

    }

    else if(event.target.classList.contains('rejected-button')){

    const parentNode = event.target.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobPost = parentNode.querySelector('.job-post').innerText;
    const jobDetails = parentNode.querySelector('.job-details').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

     parentNode.querySelector('.status').innerText = 'Rejected';
    
    const cardInfo = {
        companyName,
        jobPost,
        jobDetails,
        status:'Rejected',
        notes
    }
    
   const companyExist = rejectedList.find(item => item.companyName == cardInfo.companyName);


   if(!companyExist){
      rejectedList.push(cardInfo);
   }

   interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);

   if(currentStatus == 'rejected-button'){
         renderRejected();
   }else if(currentStatus == 'interview-button'){
         renderInterview();
   }

   calculateNumber()

    }  

    else if(event.target.closest('.delete-button')){

        const deleteButton = event.target.closest('.delete-button');
        const card = deleteButton.closest('.cards');
        const company_Name = card.querySelector('.company-name').innerText;

        interviewList = interviewList.filter(item => item.companyName != company_Name);
        rejectedList = rejectedList.filter(item => item.companyName != company_Name);


        card.remove() ;

        if(currentStatus == 'interview-button'){
            renderInterview();
        }
        else if(currentStatus == 'rejected-button'){
            
            renderRejected();
        }

        calculateNumber();

    }

    if(totalNumber.innerText == '0'){
    document.getElementById('nothing').classList.remove('hidden');
 }
    
 })

 


 function renderInterview(){
    
    filteredSection.innerHTML = '';

    for(let interview of interviewList){
        
        const div = document.createElement('div');
        div.className = 'cards border p-8 bg-sky-50 rounded-lg border-none mt-9 flex justify-between';

        div.innerHTML = `

               <div>

             <h3 class="company-name text-xl font-medium">${ interview.companyName}</h3>
            <p class="job-post mt-1">${interview.jobPost}</p>

            <p class="job-details mt-3"><small>${interview.jobDetails}</small></p>

            <p class="status px-9 btn mt-2">${interview.status}</p>

            <p class="notes mt-3">${interview.notes}</p>

            <button class="interview-button btn btn-success btn-outline mt-3">INTERVIEW</button>
            <button class="rejected-button btn btn-error btn-outline mt-3 mx-3">REJECTED</button>

           </div>

            <button class="btn delete-button"><i class="fa-regular fa-trash-can"></i></button>

        `

        filteredSection.appendChild(div);
    }
    
    
 }

 function renderRejected(){
    
    filteredSection.innerHTML = '';

    for(let rejected of rejectedList){
        
        const div = document.createElement('div');
        div.className = 'cards border p-8 bg-sky-50 rounded-lg border-none mt-9 flex justify-between';

        div.innerHTML = `

               <div>

             <h3 class="company-name text-xl font-medium">${ rejected.companyName}</h3>
            <p class="job-post mt-1">${rejected.jobPost}</p>

            <p class="job-details mt-3"><small>${rejected.jobDetails}</small></p>

            <p class="status px-9 btn mt-2">${rejected.status}</p>

            <p class="notes mt-3">${rejected.notes}</p>

            <button class="interview-button btn btn-success btn-outline mt-3">INTERVIEW</button>
            <button class="rejected-button btn btn-error btn-outline mt-3 mx-3">REJECTED</button>

           </div>

            <button class="btn delete-button"><i class="fa-regular fa-trash-can"></i></button>

        `
        

        filteredSection.appendChild(div);
    }
    
    
 }