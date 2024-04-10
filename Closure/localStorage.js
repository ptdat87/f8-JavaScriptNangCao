function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    };

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        },
    };

    return storage;
}

const profileSetting = createStorage("profile_setting");
console.log(profileSetting.get("fullName"));
profileSetting.set("fullName", "Pham Tuan Dat");
console.log(profileSetting.get("fullName"));
profileSetting.remove("fullName");
console.log(profileSetting.get("fullName"));
