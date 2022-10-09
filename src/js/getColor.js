export function getVoteColor(voteNumber) {
    if (voteNumber > 8) {
        return "green";
    } else if (voteNumber > 6) {
        return "orange";
    } else {
        return "red";
    }
}