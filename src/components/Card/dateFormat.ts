export const dateFormat = (date: string) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const now = new Date(date);
    return (
        months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear()
    );
};
