export const sortComments = (comments) => {
    return comments.sort((a, b) => {
        const { created: aTimestamp } = a;
        const { created: bTimestamp } = b;
        const aDate = new Date(aTimestamp);
        const bDate = new Date(bTimestamp);
        return bDate.getTime() - aDate.getTime();
      });
}