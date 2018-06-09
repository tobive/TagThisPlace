const loadStorageGroup = (currentState) => {
    return new Promise(resolve => {
        let listGroups = []

        try {
            storage.getIdsForKey('groups')
            .then(resData => {
                resolve({
                    ...currentState,
                    listGroups: resData
                });
            })
            .catch(err => 'LOAD GROUPS FAILED');
        } catch (err) {
            alert(err);
            resolve({
                ...currentState,
                listGroups
            });
        }
    });
};

export default loadStorageGroup;
