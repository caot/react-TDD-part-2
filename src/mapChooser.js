// function mapChooser() {
//     return 'portland.jpg';
// }

var mapChooser = (locationName) => {
    if (!locationName) {
        locationName = 'none';
    }

    let imageName = locationName + '.png'

    return imageName;
}

export default mapChooser;
