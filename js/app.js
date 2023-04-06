const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open')

    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ?'bi bi-x-lg'
    :'bi bi-list'
}

window.addEventListener("scroll", function(){
    var header = this.document.querySelector('.navbar')
    header.classList.toggle("sticky", window.scrollY > 0)
})

const icon_dark = document.querySelector('.icon_dark')
const dropdown_menu_switch_theme = document.querySelector('.dropdown_menu .select_theme .icon_dark')

    icon_dark.onclick = function(){
        document.body.classList.toggle('dark_theme')

        const isDark = document.body.classList.contains('dark_theme')
        const toggleBtnDark = document.querySelector('.icon_dark i')

        if(isDark){
            toggleBtnDark.classList = isDark
            ?'black' + 'bi bi-moon-stars'
            :'bi bi-brightness-high' + 'white'
        }else{
            toggleBtnDark.classList = isDark
            ?'white bi bi-moon-stars'
            :'black bi bi-brightness-high'
        }
    }

    dropdown_menu_switch_theme.onclick = function(){
        document.body.classList.toggle('dark_theme')

        const isDark = document.body.classList.contains('dark_theme')
        const toggleBtnDark = document.querySelector('.dropdown_menu .select_theme .icon_dark i')

        if(isDark){
            toggleBtnDark.classList = isDark
            ?'black' + 'bi bi-moon-stars'
            :'bi bi-brightness-high' + 'white'
        }else{
            toggleBtnDark.classList = isDark
            ?'white bi bi-moon-stars'
            :'black bi bi-brightness-high'
        }
    }

    icon_light.onclick = function(){
        document.body.classList.toggle('light_theme')
    
    }


