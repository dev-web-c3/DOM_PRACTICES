const array1 = [
    {
      firstName: "Winner",
      lastName: "LUYEYE",
      score: [10,5, 4]
    },
    {
      firstName: "Jérémie",
      lastName: "MENGI",
      score: [6,5, 4]
    }
  ];
  
  // Pass a function to map
  const map1 = array1.map((student) => {
    const studentName = `${student.firstName} - ${student.lastName}`;
    let sum = 0;
    student.score.map((rating) => {
      sum += rating;
    } )
    const average = sum / student.score.length ;
    return {
      studentName,
      average
    }
    });
  
  console.log(map1);
  // Expected output: Array [2, 8, 18, 32]
  