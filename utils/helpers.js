module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
        }`;
    },
    current_month_day: () => {
        const today = new Date();
        return `${today.getMonth() + 1}/${today.getDate()}`;
    },
};
