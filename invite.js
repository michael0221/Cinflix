const allToggleModal = document.querySelectorAll('[data-toggle="modal"]')

allToggleModal.forEach(btn=> {
	btn.addEventListener('click', function (e) {
		e.preventDefault()
		const modal = document.querySelector(this.dataset.target)
		const modalClose = modal.querySelector('.modal__close')

		modal.classList.add('show')

		modalClose.addEventListener('click', function (e) {
			e.preventDefault()
			modal.classList.remove('show')
		})
	})
})



document.addEventListener('click', function (e) {
	if(e.target.matches('.modal')) {
		e.target.classList.remove('show')
	}
})