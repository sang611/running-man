<template>
  <div>
    <div class="duration duration-register">
      <h3><b>Thời hạn đăng ký</b></h3>
      <a-space align="center">
        <a-avatar style="backgroundColor:orange" icon="calendar"/>
        <a-space direction="vertical" size="small">
          <a-space>
            <div>00:00</div>
            <div>23/03/2021</div>
          </a-space>
          <a-space>
            <div>23:59</div>
            <div>30/04/2021</div>
          </a-space>
        </a-space>
      </a-space>
    </div>
    <a-divider/>
    <div class="duration duration-accept">
      <h3><b>Thời hạn ghi nhận kết quả</b></h3>
      <a-space align="center">
        <a-avatar style="backgroundColor:green" icon="carry-out"/>
        <a-space direction="vertical" size="small">
          <a-space>
            <div>00:00</div>
            <div>23/03/2021</div>
          </a-space>
          <a-space>
            <div>23:59</div>
            <div>30/04/2021</div>
          </a-space>
        </a-space>
      </a-space>
    </div>
    <a-divider/>

    <div>
      <h3>30 người đã tham gia</h3>
      <a-space size="middle">
        <a-avatar :size="48" icon="user" v-for=" i in 6" v-bind:key="i"/>

      </a-space>

    </div>
    <a-divider/>
    <div>
      <h3>
        <b>Thông tin nhiệm vụ</b>
      </h3>
      <p>
        Thực hiện nhiệm vụ 7 ngày chạy HM (21.1 km) liên tiếp. <br>
        Tổng số km mỗi ngày phải thực hiện >= 21.1 km <br>
        Hoàn thành cả 7 ngày chạy sẽ được coi là Hoàn thành. <br>
      </p>
    </div>
    <div>
      <h3>Mã tham gia cuộc thi</h3>
      <p>
        <b>VIETTEL</b>
      </p>
    </div>
    <a-divider/>
    <div>
      <h3>
        <b>Hoạt động sẽ được ghi nhận</b>
      </h3>
      <a-table :columns="columns" :data-source="[]"/>
    </div>
    <br><br>

    <div>
      <h3>
        <b>Hạng mục</b>
      </h3>
      <h4>Hạng mục quãng đường</h4>

      <a-list
          class="demo-loadmore-list"
          item-layout="horizontal"
          :data-source="dataCategories"
      >

        <a-list-item slot="renderItem" slot-scope="item" >
          <a-list-item-meta
          >
            <a slot="title" style="color: #1c768f">{{ item.name.last }}</a>
          </a-list-item-meta>
          <a-space size="large">
            <div style="color: #ED9B33">Hoàn thành</div>
            <div>20 km</div>
          </a-space>
        </a-list-item>

      </a-list>
    </div>

    <a-divider />

    <div>

      <a-button
          type="danger"
          size="large"
          style="
                  position: fixed;
                  bottom: 40px;
                  right: 20px;
                  z-index: 10;
                "
          @click="showModalCategories"
      >Tham gia</a-button>

      <a-modal
          v-model="visibleModalCategories"
          title="Chọn hạng mục: Quãng đường"
          okText="Đăng ký"
          cancelText="Thoát"
          @ok="onOkModalCategories"
      >
        <a-list
            class="demo-loadmore-list"
            item-layout="horizontal"
            :data-source="dataCategories"
        >
          <a-list-item slot="renderItem" slot-scope="item">

            <a-list-item-meta
            >
              <a slot="title" style="color: #1c768f">{{ item.name.last }}</a>
            </a-list-item-meta>
            <a-space size="large">
              <div style="color: #ED9B33">Hoàn thành</div><div>20 km</div>
              <input type="radio" name="cate"/>
            </a-space>
          </a-list-item>
        </a-list>
      </a-modal>
      <a-modal
          v-model="visibleModalCode"
          title="Mã tham gia cuộc thi"
          okText="Hoàn tất"
          cancelText="Hủy"
          @ok="onOkModalCode"

      >
        <center>
          Nhập mã tham gia cuộc thi để tiến hành đăng ký
        </center>
        <br>
        <a-input placeholder="Mã tham gia cuộc thi"/>
      </a-modal>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import reqwest from "reqwest";

const columns = [
  {
    dataIndex: 'activity',
    key: 'activity',
    title: 'Hoạt động'
  },
  {
    title: 'Pace tối thiểu',
    dataIndex: 'min_pace',
    key: 'min_pace',
  },
  {
    title: 'Pace tối đa ',
    dataIndex: 'max_pace',
    key: 'max_pace',
  },
  {
    title: 'Quãng đường tối thiểu',
    key: 'min_distance',
    dataIndex: 'min_distance',
  },
  {
    title: 'Quyền riêng tư',
    key: 'participant',
    dataIndex: 'participant'
  },
];
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default {
  name: "InfoMission",

  data: function () {
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
      columns,
      dataCategories: [],
      visibleModalCategories: false,
      visibleModalCode: false
    }
  },
  mounted() {
    this.getData(res => {
      this.dataCategories = res.results;
    });
  },

  methods: {
    moment,

    getData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res);
        },
      });
    },

    showModalCategories() {
      this.visibleModalCategories = true
    },

    showModalCode() {
      this.visibleModalCode = true
    },

    onOkModalCategories() {
      this.visibleModalCategories = false;
      this.showModalCode()
    },

    onOkModalCode() {
      this.visibleModalCode = false;
    }

  }
}
</script>

<style scoped>

.change-btn {
  background-color: #5578eb;
  color: #fff;
}


.join-btn {
  background-color: darkorange;
  color: #fff;
  outline: none;
}

.join-btn:hover {
  background-color: orange;
  border: none;
}

</style>
