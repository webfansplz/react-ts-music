export function home_req(txt?: string): any {
  return {
    type: 'home_req',
    txt
  };
}
