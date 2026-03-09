export function drawStatusText(context, input) {
    context.font = "50px Arial";
    context.fillText(`Last  input : ${input?.lastKey}`, 30, 50);
}

