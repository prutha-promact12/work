using Microsoft.EntityFrameworkCore.Migrations;

namespace ChatApplication.Migrations
{
    public partial class create8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Connections");

            migrationBuilder.AddColumn<string>(
                name: "ConnectionID",
                table: "LoginData",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ConnectionID",
                table: "LoginData");

            migrationBuilder.CreateTable(
                name: "Connections",
                columns: table => new
                {
                    ConnectionID = table.Column<string>(nullable: false),
                    Connected = table.Column<bool>(nullable: false),
                    UserAgent = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Connections", x => x.ConnectionID);
                });
        }
    }
}
