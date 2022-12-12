const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const jamValue = jam.value.trim();
	const tujuanValue = tujuan.value.trim();
	const jumlahValue = jumlah.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Wajib memasukan Nama');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Masukan Email yang benar');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email tidak valid');
	} else {
		setSuccessFor(email);
	}
	
	if(jamValue === '') {
		setErrorFor(jam, 'Masukan jam keberangkatan');
	} else {
		setSuccessFor(jam);
	}
	
	if(tujuanValue === '') {
		setErrorFor(tujuan, 'Masukan tujuan keberangkatan');
	} else {
		setSuccessFor(tujuan);
	}

	if(jumlahValue === '') {
		setErrorFor(jumlah, 'Masukan jumlah yang di inginkan');
	} else {
		setSuccessFor(jumlah);
	}
	
	

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	













// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});