// import FileUpload from 'vue-upload-component'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Feather'
  }
})

Vue.component('file-upload', {
  data: function () {
    return {
      selectedFile: null,
      files: null,
      fData: null
    }
  },
  methods: {
    onFileSelected(event) {
      console.log(event)
      this.selectedFile = event.target.files[0]
      files = this.$refs.file.files
      fData = new FormData()
      vm.ms = ''
      for (i = 0; i < files.length; i++) {
        fData.append('files[' + i + ']', files[i])
        console.log(fData[i])
        vm.ms = files[i].name + ' \n ' + vm.ms
      }
    },
  },
  template: '<input id="f-u" type="file" name="file" ref="file" @change="onFileSelected" multiple>'
})
new Vue({ el: '#c-f' })

Vue.component('upload-button', {
  data: function () {
    return {
      response: null
    }
  },
  methods: {
  },
  template: '<input type="submit" id="sub">'
})
new Vue({ el: '#c-b' })

var vm = new Vue({
  el: '#u',
  data: {
    ms: ''
  },
  template: '<div id="u" style="white-space: pre-line;">{{ ms }}</div>'
})

formElem.onsubmit = async (e) => {
  e.preventDefault();
  const files = event.target.files
  const formData = new FormData(formElem)

  fetch('http://10.147.18.50/cgi-bin/hw.sh', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
};
