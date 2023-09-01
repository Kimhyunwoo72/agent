function addressPopup() {
    let popup = document.querySelector('.admin-popup.address');
    if (!popup.classList.contains('show')) {
        popup.classList.add('show');
    } else {
        popup.classList.remove('show');
    }
}

function counselorPopup() {
    let counselorPopup = document.querySelector('.admin-popup.counselor');
    if (!counselorPopup.classList.contains('show')) {
        counselorPopup.classList.add('show');
    } else {
        counselorPopup.classList.remove('show');
    }
}

function filePopup() {
    let counselorPopup = document.querySelector('.admin-popup.file');
    if (!counselorPopup.classList.contains('show')) {
        counselorPopup.classList.add('show');
    } else {
        counselorPopup.classList.remove('show');
    }
}

function companyPopup() {
    let counselorPopup = document.querySelector('.admin-popup.company');
    if (!counselorPopup.classList.contains('show')) {
        counselorPopup.classList.add('show');
    } else {
        counselorPopup.classList.remove('show');
    }
}

function memoPopup() {
    let counselorPopup = document.querySelector('.admin-popup.memo');
    if (!counselorPopup.classList.contains('show')) {
        counselorPopup.classList.add('show');
    } else {
        counselorPopup.classList.remove('show');
    }
}

$(function () {
    $('#datepicker1,#datepicker2').datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        changeYear: true, //option값 년 선택 가능
        changeMonth: true, //option값  월 선택 가능
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });

    $('#datepicker3, #datepicker4').datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        changeYear: true, //option값 년 선택 가능
        changeMonth: true, //option값  월 선택 가능
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });
});

function displayFileName() {
    const fileInput = document.getElementById('file-add');
    const uploadNameInput = document.querySelector('.upload-name');

    if (fileInput.files.length > 0) {
        uploadNameInput.value = fileInput.files[0].name;
    } else {
        uploadNameInput.value = '첨부파일';
    }
}
