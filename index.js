function convertFahrToCelsius (farhTemp){
    if (typeof farhTemp === "number" || typeof farhTemp ==="string"){
        let C = ((farhTemp - 32) * 5) /9;
        return C.toFixed(4)
        //console.log(`${farhTemp} is a valid number but a/an ${typeof farhTemp} type.`)
    }
    
    if (typeof farhTemp === "boolean") {
        console.log(`${farhTemp} is not a valid number but a/an ${typeof farhTemp}.`);
        return `${farhTemp} is not a valid number but a/an ${typeof farhTemp}.`;
    }

    if(Array.isArray(farhTemp)) {
        console.log(`[${farhTemp}] is not a valid number but a/an array.`);
        return `[${farhTemp}] is not a valid number but a/an array.`;
    }  else if (typeof farhTemp === "object") {
        console.log(
            `${JSON.stringify(
                farhTemp            
            )} is not a valid number but a/an ${typeof farhTemp}.`
        );
        return `${JSON.stringify(
            farhTemp            
        )} is not a valid number but a/an ${typeof farhTemp}.`;
    }

    let anyNumber = Number(farhTemp);
    if (Number.isNaN(anyNumber)) {
        console.log(`${farhTemp} is not a valid number but a/an ${typeof farhTemp}.`);
        return `${farhTemp} is not a valid number but a/an ${typeof farhTemp}.`;
    }
}
