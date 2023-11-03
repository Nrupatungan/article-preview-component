const floater = document.querySelector('.floater-wrapper')
const profile = document.querySelector('.profile-wrapper')
const share_icon = document.querySelectorAll('#share-icon')

if(profile.classList.contains('hidden') && floater.classList.contains('hidden') === false){
    profile.className = "profile-wrapper px-7 mb-5 flex justify-between transition-all duration-500 ease-linear lg:mb-0 lg:mb-0 lg:px-0";
    floater.className = "hidden floater-wrapper h-16 px-7 flex justify-between items-center bg-Very_Dark_Grayish_Blue transition-all duration-500 ease-linear lg:w-60 lg:rounded-xl lg:h-14 lg:absolute lg:top-[-5.5rem] lg:right-[-6.4rem] lg:shadow-lg";
}

share_icon.forEach(icon => {
    icon.addEventListener('click', ()=>{
        let screen_size = window.screen.width;
        if(screen_size < 1018){
            if(profile.classList.contains('hidden') && floater.classList.contains('hidden') === false){
                profile.classList.remove('hidden')
                floater.classList.add('hidden')
            }
            else{
                profile.classList.add('hidden')
                floater.classList.remove('hidden')
            }
        }else{
            if(profile.classList.contains('hidden')){
                profile.classList.remove('hidden')
            }

            if(floater.classList.contains('hidden') === false){
                floater.classList.remove('hidden')
            }

            floater.classList.toggle('hidden')
        }
    }
)})