const getRollNo = () => {
    setTimeout(() => {
        console.log('api getting roolno');
        let roll_no = [1, 2, 3, 4, 5];
        console.log(roll_no);

        setTimeout((rollno) => {
            const biodata = {
                name: 'vinod',
                age: 23
            }
            console.log(`my rollno ${rollno}. my name is ${biodata.name} and i am ${biodata.age} years`);

            setTimeout(() => {
                biodata.gender = 'male';
                console.log(`my name is ${biodata.name} i am ${biodata.gender}`);
            }, 2000);
        }, 2000, roll_no[1]);
    }, 2000);
}
getRollNo();