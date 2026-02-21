// All jobs count secion
const cardContainer = document.getElementById("card-container");
const allJobs = cardContainer.childElementCount;
document.getElementById("totall-jobs").innerText = `${allJobs}`;
document.getElementById("jobs-count").innerText = `${allJobs}`;
if (allJobs == 0) {
    let cardHidden = document.getElementById("card-hidden")
    cardHidden.classList.remove("hidden")
}

// interview & rejected count
let interviewList = [] ;
let rejectedList = [] ;

interviewList.push ({name: 'sany'})
const interviewCount = document.getElementById("totall-interview");
const rejectedCount = document.getElementById("totall-rejected");
calculateCount();
function calculateCount () {
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

// toggle btn
const filterbtnAll = document.getElementById("filter-btn-all");
const filterbtnInterview = document.getElementById("filter-btn-interview");
const filterbtnRejected = document.getElementById("filter-btn-rejected");

function toggleStyle(id){
    filterbtnAll.classList.remove('btn-primary')
    filterbtnInterview.classList.remove('btn-primary')
    filterbtnRejected.classList.remove('btn-primary')

    const selected = document.getElementById(id)
    selected.classList.add('btn-primary')

}

