<script lang="ts">
  import { user } from '$lib/utils/user'
  import { goto } from '$app/navigation';
  import { authPocketbase } from '$lib/utils/api'
	import { userPb } from '$lib/utils/stores';

    let username: string;
    let password: string;
  
    function login() {
      // pb
      const res = authPocketbase(username, password)
      userPb.set(res)
      //gun
      user.auth(username, password, ({ err }: any) => err && alert(err));
      goto('/')
    }
  
  </script>
  
  <div class="p-4 space-y-4">
    <div class="form-control">
      <label class="input-group input-group-vertical">
        <span class="bg-primary">Username</span>
    
      <input
        name="username"
        bind:value={username}
        minlength="3"
        maxlength="16"
        class="input input-bordered"
      />
    </label>
    </div>
  
    <div class="form-control">
      <label class="input-group input-group-vertical">
        <span class="bg-primary">Password</span>
    
      <input
        name="password"
        bind:value={password}
        minlength="8"
        type="password"
        class="input input-bordered"
      />
    </label>
    </div>

    <a href="/signup" class="text-blue-600 hover:underline block">Not registered? Signup</a>
    <button on:click={login} class="btn btn-primary w-full">login</button>
  </div>