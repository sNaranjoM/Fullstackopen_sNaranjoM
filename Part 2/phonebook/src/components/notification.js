const Notification = ({ notificationObject }) => {


    if (notificationObject === null) {
      return null
    }

    const colorMessageType = notificationObject.typeNotification === 'error' ? { color : 'red' } : {color : 'green'}

    return <div className="notification" style={colorMessageType}>{notificationObject.message}</div>
  }
  
  export default Notification
  
  
  