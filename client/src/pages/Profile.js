import React from 'react'
import {useNavigate} from 'react-router-dom'
function Profile() {
    let navigate=useNavigate();

  return (
    <div className='mt-[15vh] w-[80vw] m-auto'>

        <div className='text-[#3f3d56] text-[1.5rem] font-semibold'>
            My Account
        </div>
        <div className='text-[#3f3d56] text-md font-semibold'>
        Manage your DormInn experience
        </div>

        <div className='grid sm:grid-cols-2 mt-6 gap-5'>
            <div onClick={()=>navigate(`/info`)} className='p-5 border border-[#3f3d56] rounded-md'>
                <div className='flex items-center gap-3'>
                    <div>
                    <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="35" height="35" fill="#FDFDFD"/>
<path d="M24.7917 22.9688C23.5764 22.9688 22.5434 22.5434 21.6927 21.6927C20.842 20.842 20.4167 19.809 20.4167 18.5938C20.4167 17.3785 20.842 16.3455 21.6927 15.4948C22.5434 14.6441 23.5764 14.2188 24.7917 14.2188C26.0069 14.2188 27.0399 14.6441 27.8906 15.4948C28.7413 16.3455 29.1667 17.3785 29.1667 18.5938C29.1667 19.809 28.7413 20.842 27.8906 21.6927C27.0399 22.5434 26.0069 22.9688 24.7917 22.9688ZM24.7917 20.7813C25.4115 20.7813 25.931 20.5716 26.3503 20.1523C26.7695 19.7331 26.9792 19.2135 26.9792 18.5938C26.9792 17.974 26.7695 17.4544 26.3503 17.0352C25.931 16.6159 25.4115 16.4063 24.7917 16.4063C24.1719 16.4063 23.6523 16.6159 23.2331 17.0352C22.8138 17.4544 22.6042 17.974 22.6042 18.5938C22.6042 19.2135 22.8138 19.7331 23.2331 20.1523C23.6523 20.5716 24.1719 20.7813 24.7917 20.7813ZM16.0417 33.1771V28.9479C16.0417 28.4375 16.1632 27.9575 16.4062 27.5078C16.6493 27.0582 16.9896 26.6997 17.4271 26.4323C18.1076 26.0191 18.8125 25.6606 19.5417 25.3568C20.2708 25.053 21.0243 24.8038 21.8021 24.6094L24.7917 28.474L27.7812 24.6094C28.559 24.8038 29.3064 25.053 30.0234 25.3568C30.7404 25.6606 31.4392 26.0191 32.1198 26.4323C32.5573 26.6997 32.9036 27.0582 33.1589 27.5078C33.4141 27.9575 33.5417 28.4375 33.5417 28.9479V33.1771H16.0417ZM18.2292 30.9896H23.9531L20.9635 27.125C20.4774 27.3194 20.0035 27.5321 19.5417 27.763C19.0799 27.9939 18.6424 28.2431 18.2292 28.5104V30.9896ZM25.6302 30.9896H31.3542V28.5104C30.941 28.2431 30.5095 27.9939 30.0599 27.763C29.6102 27.5321 29.1424 27.3194 28.6562 27.125L25.6302 30.9896ZM6.5625 30.625C5.96094 30.625 5.44596 30.4108 5.01758 29.9824C4.58919 29.554 4.375 29.0391 4.375 28.4375V6.5625C4.375 5.96094 4.58919 5.44596 5.01758 5.01758C5.44596 4.58919 5.96094 4.375 6.5625 4.375H28.4375C29.0391 4.375 29.554 4.58919 29.9824 5.01758C30.4108 5.44596 30.625 5.96094 30.625 6.5625V15.5677C30.3576 15.0816 30.0417 14.6319 29.6771 14.2188C29.3125 13.8056 28.8993 13.441 28.4375 13.125V6.5625H6.5625V28.4375H13.8542V30.625H6.5625ZM10.2083 12.3958H22.6406C22.9809 12.2743 23.3314 12.1832 23.6921 12.1224C24.0528 12.0616 24.4193 12.0313 24.7917 12.0313V10.2083H10.2083V12.3958ZM10.2083 18.5938H18.2292C18.2292 18.2292 18.2595 17.8585 18.3203 17.4818C18.3811 17.105 18.4722 16.7465 18.5937 16.4063H10.2083V18.5938ZM10.2083 24.7917H15.9688C16.3819 24.4757 16.8194 24.2144 17.2812 24.0078C17.7431 23.8012 18.217 23.6007 18.7031 23.4063V22.6042H10.2083V24.7917ZM6.5625 28.4375V6.5625V13.125V12.0313V28.4375Z" fill="#3F3D56"/>
</svg>

                    </div>
                    <div className='text-[#3f3d56] text-[1.2rem] font-semibold'>
                    Personal information
                    </div>
                </div>
                    <div className='ml-[2rem]'>
                        Update your personal details
                    </div>
            </div>
            <div onClick={()=>navigate(`/profile/security`)} className='p-5 border border-[#3f3d56] rounded-md'>
                <div className='flex items-center gap-3'>
                    <div>
                    <svg width="24" height="24" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="38" height="38" fill="#FDFDFD"/>
<path d="M18.9999 34.7936C15.3055 33.87 12.2708 31.7259 9.89575 28.3613C7.52075 24.9967 6.33325 21.3089 6.33325 17.2978V7.87695L18.9999 3.12695L31.6666 7.87695V17.2978C31.6666 21.3089 30.4791 24.9967 28.1041 28.3613C25.7291 31.7259 22.6944 33.87 18.9999 34.7936ZM18.9999 32.3395C22.0346 31.3367 24.5086 29.4433 26.4218 26.6592C28.335 23.8752 29.2916 20.7547 29.2916 17.2978V9.53945L18.9999 5.66029L8.70825 9.53945V17.2978C8.70825 20.7547 9.66485 23.8752 11.578 26.6592C13.4912 29.4433 15.9652 31.3367 18.9999 32.3395ZM15.4374 25.3332H22.5624C22.9055 25.3332 23.1892 25.2211 23.4135 24.9967C23.6378 24.7724 23.7499 24.4888 23.7499 24.1457V18.604C23.7499 18.261 23.6378 17.9773 23.4135 17.753C23.1892 17.5287 22.9055 17.4165 22.5624 17.4165H22.1666V15.8332C22.1666 14.9624 21.8565 14.2169 21.2364 13.5967C20.6162 12.9766 19.8708 12.6665 18.9999 12.6665C18.1291 12.6665 17.3836 12.9766 16.7635 13.5967C16.1433 14.2169 15.8333 14.9624 15.8333 15.8332V17.4165H15.4374C15.0944 17.4165 14.8107 17.5287 14.5864 17.753C14.3621 17.9773 14.2499 18.261 14.2499 18.604V24.1457C14.2499 24.4888 14.3621 24.7724 14.5864 24.9967C14.8107 25.2211 15.0944 25.3332 15.4374 25.3332ZM17.0208 17.4165V15.8332C17.0208 15.3054 17.2187 14.8634 17.6145 14.5072C18.0103 14.1509 18.4721 13.9728 18.9999 13.9728C19.5277 13.9728 19.9895 14.1509 20.3853 14.5072C20.7812 14.8634 20.9791 15.3054 20.9791 15.8332V17.4165H17.0208Z" fill="#3F3D56"/>
</svg>


                    </div>
                    <div className='text-[#3f3d56] text-[1.2rem] font-semibold'>
                    Security
                    </div>
                </div>
                    <div className='ml-[2rem]'>
                    Update your password and secure your
account
                    </div>
            </div>
            <div onClick={()=>navigate(`/profile/payments`)} className='p-5 border border-[#3f3d56] rounded-md'>
                <div className='flex items-center gap-3'>
                    <div>
                    <svg width="24" height="24" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="35" height="38" fill="#FDFDFD"/>
<path d="M19.6877 21.3747C18.4724 21.3747 17.4394 20.9129 16.5887 19.9893C15.738 19.0656 15.3127 17.9441 15.3127 16.6247C15.3127 15.3052 15.738 14.1837 16.5887 13.2601C17.4394 12.3365 18.4724 11.8747 19.6877 11.8747C20.9029 11.8747 21.9359 12.3365 22.7866 13.2601C23.6373 14.1837 24.0627 15.3052 24.0627 16.6247C24.0627 17.9441 23.6373 19.0656 22.7866 19.9893C21.9359 20.9129 20.9029 21.3747 19.6877 21.3747ZM8.021 26.9163C7.41943 26.9163 6.90446 26.6838 6.47607 26.2187C6.04769 25.7536 5.8335 25.1945 5.8335 24.5413V8.70801C5.8335 8.05488 6.04769 7.49577 6.47607 7.03066C6.90446 6.56556 7.41943 6.33301 8.021 6.33301H31.3543C31.9559 6.33301 32.4709 6.56556 32.8993 7.03066C33.3276 7.49577 33.5418 8.05488 33.5418 8.70801V24.5413C33.5418 25.1945 33.3276 25.7536 32.8993 26.2187C32.4709 26.6838 31.9559 26.9163 31.3543 26.9163H8.021ZM11.6668 24.5413H27.7085C27.7085 23.433 28.0609 22.4962 28.7658 21.7309C29.4706 20.9656 30.3335 20.583 31.3543 20.583V12.6663C30.3335 12.6663 29.4706 12.2837 28.7658 11.5184C28.0609 10.7531 27.7085 9.81634 27.7085 8.70801H11.6668C11.6668 9.81634 11.3144 10.7531 10.6095 11.5184C9.90468 12.2837 9.04183 12.6663 8.021 12.6663V20.583C9.04183 20.583 9.90468 20.9656 10.6095 21.7309C11.3144 22.4962 11.6668 23.433 11.6668 24.5413ZM29.1668 31.6663H3.646C3.04443 31.6663 2.52946 31.4338 2.10107 30.9687C1.67269 30.5036 1.4585 29.9445 1.4585 29.2913V11.083H3.646V29.2913H29.1668V31.6663Z" fill="#3F3D56"/>
</svg>

                    </div>
                    <div className='text-[#3f3d56] text-[1.2rem] font-semibold'>
                    Payments and payouts
                    </div>
                </div>
                    <div className='ml-[2rem]'>
                    Review payments, payouts, coupons and
gift cards
                    </div>
            </div>
            <div className='p-5 border border-[#3f3d56] rounded-md'>
                <div className='flex items-center gap-3'>
                    <div>
                    <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="35" height="35" fill="#FDFDFD"/>
<path d="M8.02075 32.0837C7.43742 32.0837 6.927 31.8649 6.4895 31.4274C6.052 30.9899 5.83325 30.4795 5.83325 29.8962V5.10449C5.83325 4.52116 6.052 4.01074 6.4895 3.57324C6.927 3.13574 7.43742 2.91699 8.02075 2.91699H21.1822L29.1666 10.9014V29.8962C29.1666 30.4795 28.9478 30.9899 28.5103 31.4274C28.0728 31.8649 27.5624 32.0837 26.9791 32.0837H8.02075ZM20.0885 11.8857V5.10449H8.02075V29.8962H26.9791V11.8857H20.0885Z" fill="#3F3D56"/>
</svg>


                    </div>
                    <div className='text-[#3f3d56] text-[1.2rem] font-semibold'>
                    Taxes
                    </div>
                </div>
                    <div className='ml-[2rem]'>
                    Manage taxpayer information and tax
documents
                    </div>
            </div>
            <div className='p-5 border border-[#3f3d56] rounded-md'>
                <div className='flex items-center gap-3'>
                    <div>
                    <svg width="24" height="24" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="38" height="38" fill="#FDFDFD"/>
<path d="M19.0091 29.4503C19.6223 29.4503 20.1435 29.226 20.5727 28.7774C21.0019 28.3288 21.2165 27.801 21.2165 27.1941H16.7436C16.7436 27.801 16.9679 28.3288 17.4165 28.7774C17.8651 29.226 18.396 29.4503 19.0091 29.4503ZM11.3207 24.8191H26.6394V22.4441H25.0561V17.892C25.0561 16.3087 24.6405 14.8507 23.8092 13.518C22.978 12.1854 21.8103 11.3739 20.3061 11.0837V9.89616C20.3061 9.52605 20.181 9.21581 19.9308 8.96544C19.6805 8.71508 19.3704 8.58991 19.0005 8.58991C18.6306 8.58991 18.3137 8.71508 18.0498 8.96544C17.7859 9.21581 17.654 9.52605 17.654 9.89616V11.0837C16.1498 11.3739 14.9821 12.1524 14.1509 13.4191C13.3196 14.6857 12.904 16.0975 12.904 17.6545V22.4441H11.3207V24.8191ZM15.279 22.4441V17.417C15.279 16.3502 15.6353 15.437 16.3478 14.6773C17.0603 13.9177 17.9377 13.5378 18.98 13.5378C20.0224 13.5378 20.8998 13.9177 21.6123 14.6773C22.3248 15.437 22.6811 16.3502 22.6811 17.417V22.4441H15.279ZM19.0104 34.8337C16.8271 34.8337 14.7754 34.418 12.8552 33.5868C10.9349 32.7555 9.25574 31.6208 7.81755 30.1826C6.37935 28.7444 5.24463 27.0642 4.41338 25.142C3.58213 23.2199 3.1665 21.166 3.1665 18.9805C3.1665 16.795 3.58213 14.7412 4.41338 12.819C5.24463 10.8968 6.37935 9.22324 7.81755 7.79824C9.25574 6.37324 10.9359 5.24512 12.8581 4.41387C14.7803 3.58262 16.8341 3.16699 19.0196 3.16699C21.2051 3.16699 23.259 3.58262 25.1811 4.41387C27.1033 5.24512 28.7769 6.37324 30.2019 7.79824C31.6269 9.22324 32.755 10.8989 33.5863 12.8253C34.4175 14.7517 34.8332 16.8065 34.8332 18.9898C34.8332 21.1731 34.4175 23.2248 33.5863 25.145C32.755 27.0652 31.6269 28.742 30.2019 30.1753C28.7769 31.6087 27.1012 32.7434 25.1748 33.5795C23.2484 34.4156 21.1936 34.8337 19.0104 34.8337ZM19.0196 32.4587C22.7537 32.4587 25.9269 31.1458 28.5394 28.5201C31.1519 25.8944 32.4582 22.7146 32.4582 18.9805C32.4582 15.2465 31.1544 12.0732 28.5469 9.46074C25.9393 6.84824 22.757 5.54199 18.9998 5.54199C15.279 5.54199 12.1057 6.84576 9.48005 9.4533C6.85435 12.0609 5.5415 15.2432 5.5415 19.0003C5.5415 22.7212 6.85435 25.8944 9.48005 28.5201C12.1057 31.1458 15.2856 32.4587 19.0196 32.4587Z" fill="#3F3D56"/>
</svg>


                    </div>
                    <div className='text-[#3f3d56] text-[1.2rem] font-semibold'>
                    Notifications
                    </div>
                </div>
                    <div className='ml-[2rem]'>
                    Choose notification preferences and unsubscribe from what you don’t want
                    </div>
            </div>
            <div className='p-5 border border-[#3f3d56] rounded-md'>
                <div className='flex items-center gap-3'>
                    <div>
                    <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="35" height="35" fill="#FDFDFD"/>
<path d="M15.5677 30.625V22.4219H17.7552V25.4479H30.625V27.6354H17.7552V30.625H15.5677ZM4.375 27.6354V25.4479H13.3802V27.6354H4.375ZM11.1927 21.5833V18.5937H4.375V16.4062H11.1927V13.3438H13.3802V21.5833H11.1927ZM15.5677 18.5937V16.4062H30.625V18.5937H15.5677ZM21.6198 12.5781V4.375H23.8073V7.36458H30.625V9.55208H23.8073V12.5781H21.6198ZM4.375 9.55208V7.36458H19.4323V9.55208H4.375Z" fill="#3F3D56"/>
</svg>


                    </div>
                    <div  className='text-[#3f3d56] text-[1.2rem] font-semibold'>
                    Preferences
                    </div>
                </div>
                    <div className='ml-[2rem]'>
                    Set your default language, currency and
timezone
                    </div>
            </div>
        
        </div>
    </div>
  )
}

export default Profile