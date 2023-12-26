
export const NotionActions = {
    saveValue: (value) => {
        return new Promise((resolve, reject) => {
            let valueToSave = value;
            if (!value) {
                valueToSave = [];
            }
            localStorage.setItem('notions', JSON.stringify(valueToSave));
            resolve();
        })
    },
    getValue: () => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem('notions');
            if (!savedValue) {
                resolve([])
            } else
                resolve(JSON.parse(savedValue));
        })
    }
}