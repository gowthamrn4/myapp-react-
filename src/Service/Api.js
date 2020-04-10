export const MAIN_URL = 'https://mydev-connector.herokuapp.com';
// export const MAIN_URL = 'http://192.168.43.178:5000'
// export const MAIN_URL = 'http://192.168.0.122:5000'



export const BASE_URL = {
    LOGIN: '/api/auth/medappuser/signin',
    REGISTER: '/api/medappusers/signup',
    ADDITEM: '/item/addItem',
    GETITEM: '/item/getItem',
    GETQUESTION: '/api/medappsecurityquestions/all',
    FORGETPASSWORD: '/api/medappusers/forgotpassword',
    RESETPASSWORD: '/api/medappusers/changepassword',
    GENERATEOTP: '/api/medappusers/generate/accesscode',
    VERFIYACCESSCODE: '/api/medappusers/verify/accesscode'
}

export const USERPROFILE = {
    GETALLBACTH: '/api/medappbadges/all',
    GETPROFILE: '/api/medappprofile/me',
    CREATEPROFILE: '/api/medappprofile',
    GETPROFILEID: '/api/medappprofile/user/',
    FOLLOWUSER: '/api/medappprofile/follow/',
    GETALLPROFILE: '/api/medappusers/getallusers',
    PROFILEUPLOAD: '/api/medappprofile/myprofile/imageupload'
}

export const TIMELINEPOST = {
    NEWPOST: '/api/medappposts',
    GETALLPOST: '/api/medappposts',
    GETPOST: '/api/medappposts',
    GETPOSTBYID: '/api/medappposts/',
    DELETEPOST: '/api/medappposts',
    LIKEPOST: '/api/medappposts/like/',
    UNLIKEPOST: '/api/medappposts/unlike/',
    COMMENTPOST: '/api/medappposts/comment',
    DELETECOMMONT: '/api/medappposts/comment',
    SEARCH: '/api/medappsearch/',
    HUGPOST: '/api/medappposts/hug/',
    UNDOHUGPOST: '/api/medappposts/undohug/',
    HIVEFIVE: '/api/medappposts/highfive/',
    UNDOHIVEFIVE: '/api/medappposts/undohighfive/',
    GETHASHTAG: '/api/medappposts/tags/all',
    CREATEHASHTAG: '/api/medappposts/tags/createupdate/tag'
}

export const CHATROOMS = {
    NEWCHATROOM: '/api/medappposts/chatroom/',
    UPDATECHATROOM: '/api/medappposts/chatroom/',
    GETALLAPPROVEDCHATROOMS: '/api/medappposts/getallchatrooms/approved',
    GETALLUNAPPROVEDCHATROOMS: '/api/medappposts/getallchatrooms/unapproved',
    GETALLCHATROOMS: '/api/medappposts/chatroom/getallchatrooms',
    GETALLPRIVATEROOMSPOST: '/api/medappposts/post/',
    GETPUBLICROOMID: '/api/medappposts/chatroom/get/publicchatroom',
    UNAPPROVEDCHATROOM: '/api/medappposts/chatroom/unapprove/',
    APPROVEDCHATROOM: '/api/medappposts/chatroom/approve/'
}

export const TESTMESSAGE = {
    GETCHATMESSAGE: 'https://houstonapi.herokuapp.com/item/getItem'
}

export const LINKS = {
    GETLINKS: '/api/medapppm/alllinks',
    ALLGROUPS: '/api/medapppm/allgroups'
}

export const NOTIFICATION = {
    all: '/api/medappnotifications/all'
}