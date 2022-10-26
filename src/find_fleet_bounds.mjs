const findFleetBounds = positions => {
    const max_longitude = Math.max.apply(
        Math,
        positions.map(pos => {
            return pos.lon;
        }),
    );
    const min_longitude = Math.min.apply(
        Math,
        positions.map(pos => {
            return pos.lon;
        }),
    );
    const max_latitude = Math.max.apply(
        Math,
        positions.map(pos => {
            return pos.lat;
        }),
    );
    const min_latitude = Math.min.apply(
        Math,
        positions.map(pos => {
            return pos.lat;
        }),
    );

    return new L.LatLngBounds(
        new L.LatLng(max_latitude, max_longitude),
        new L.LatLng(min_latitude, min_longitude),
    );
};

export default findFleetBounds;
