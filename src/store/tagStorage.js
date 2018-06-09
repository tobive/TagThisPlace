const loadStorageTag = (currentState) => {
    return new Promise(resolve => {
        const listTags = []

        try {
            storage.getAllDataForKey('tags')
            .then(resData => {
                resolve({
                    ...currentState,
                    listTags: resData
                });
            })
            .catch(err => {
                alert('LOAD TAGS FAILED');
                // resolve(currentState);
            })
        } catch (err) {
            alert(err);
            resolve({
                ...currentState,
                listTags
            });
        }
    });
};

export default loadStorageTag;
