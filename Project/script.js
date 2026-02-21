document.addEventListener('DOMContentLoaded', () => {
    const screens = Array.from(document.querySelectorAll('.screen'))
    const show = id => {
        screens.forEach(s => s.id === id ? s.classList.remove('hidden') : s.classList.add('hidden'))
        document.getElementById('backBtn').classList.toggle('hidden', id === 'home')
    }

    // navigation from home
    document.querySelectorAll('[data-screen]').forEach(btn => {
        btn.addEventListener('click', e => show(btn.dataset.screen))
    })

    // quick links
    document.getElementById('toLogin').addEventListener('click', () => show('login'))
    document.getElementById('toSignup').addEventListener('click', () => show('signup'))
    document.getElementById('guestLink').addEventListener('click', () => show('browse'))

    // back button returns to home
    document.getElementById('backBtn').addEventListener('click', () => show('home'))

    // simple form handling
    document.getElementById('signupForm').addEventListener('submit', e => {
        e.preventDefault(); alert('Signed up — switching to USER screen'); show('user')
    })
    document.getElementById('loginForm').addEventListener('submit', e => {
        e.preventDefault(); alert('Logged in — switching to USER screen'); show('user')
    })

    // Book flow: from user -> checkout -> order
    document.getElementById('userBook').addEventListener('click', () => show('checkout'))
    document.getElementById('checkoutForm').addEventListener('submit', e => {
        e.preventDefault(); show('order')
    })

    // stars
    const stars = document.getElementById('stars')
    let rating = 0
    stars.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
            rating = +b.dataset.value
            stars.querySelectorAll('button').forEach(s => s.textContent = +s.dataset.value <= rating ? '★' : '☆')
            alert('Thanks for rating: ' + rating)
        })
    })

    // start on home
    show('home')
})
