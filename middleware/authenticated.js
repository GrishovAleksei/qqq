export default function({ store, route, redirect}) {
  const user = store.state.users.user

  if(!user) {
    redirect('/')
  }

}